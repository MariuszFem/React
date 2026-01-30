import { useState, useEffect } from 'react';
import { tasksApi } from './api/tasksApi'; 
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Card from "./components/Card";
import FilterButtons from "./components/FilterButtons";
import TaskStats from "./components/TaskStats";
import AddTask from "./components/AddTask";
import QuoteOfTheDay from "./components/QuoteOfTheDay";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true); 
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await tasksApi.fetchTasks();
        setTasks(data);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (isLoading) return; 
    const saveData = async () => {
      setIsSaving(true);
      await tasksApi.saveTasks(tasks);
      setIsSaving(false);
    };
    saveData();
  }, [tasks, isLoading]);

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));
  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const changePriority = (id, prio) => setTasks(tasks.map(t => t.id === id ? { ...t, priority: prio } : t));
  const addTask = (title) => setTasks([...tasks, { id: Date.now(), title, completed: false, priority: "medium" }]);
  const clearAllTasks = () => window.confirm("Wyczyścić wszystko?") && setTasks([]);

  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div className="App">
      <Header />
      <Card title="Panel Kontrolny">
        <QuoteOfTheDay />
        <AddTask onAdd={addTask} />
        
        <div style={{ height: '20px', fontSize: '0.8em', color: 'blue' }}>
          {isSaving && "Zapisywanie zmian w chmurze..."}
        </div>

        <TaskStats tasks={tasks} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <FilterButtons activeFilter={filter} setFilter={setFilter} />
          <button onClick={clearAllTasks} style={{ color: 'red' }}>Wyczyść listę</button>
        </div>

        {isLoading ? (
          <p>Trwa pobieranie zadań z serwera...</p>
        ) : (
          <TaskList 
            tasks={filteredTasks} 
            onDelete={deleteTask} 
            onToggle={toggleTask}
            onChangePriority={changePriority} 
          />
        )}
      </Card>
    </div>
  );
}

export default App;