import { useState } from 'react';
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Card from "./components/Card";
import FilterButtons from "./components/FilterButtons";
import TaskStats from "./components/TaskStats";
import AddTask from "./components/AddTask"; // 1. DODAJ TEN IMPORT

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Nauczyć się propsów", completed: true, priority: "high" },
    { id: 2, title: "Zrozumieć useState", completed: false, priority: "medium" },
    { id: 3, title: "Zrobić przerwę na kawę", completed: false, priority: "low" },
  ]);

  const [filter, setFilter] = useState('all');

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const changePriority = (id, newPriority) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, priority: newPriority } : task
    ));
  };

  const addTask = (title) => {
    const newTask = {
      id: Date.now(), 
      title: title, // 2. DODAJ TĘ LINIĘ, żeby zadanie miało nazwę!
      completed: false,
      priority: "medium"
    };
    setTasks([...tasks, newTask]); 
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="App">
      <Header />
      <Card title="Moje Zadania" className="main-card">
        {/* 3. WRZUĆ KOMPONENT TUTAJ */}
        <AddTask onAdd={addTask} />
        
        <TaskStats tasks={tasks} />
        <FilterButtons activeFilter={filter} setFilter={setFilter} />
        
        <TaskList 
          tasks={filteredTasks} 
          onDelete={deleteTask} 
          onToggle={toggleTask}
          onChangePriority={changePriority} 
        />
      </Card>
    </div>
  );
}

export default App;