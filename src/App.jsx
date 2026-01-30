import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Card from "./components/Card";

function App() {
  const myTasks = [
    { id: 1, title: "Nauczyć się propsów", completed: true, priority: "high" },
    { id: 2, title: "Zrobić zadanie 2", completed: false, priority: "medium" },
    { id: 3, title: "Wysłać kod na GitHub", completed: false, priority: "low" },
  ];

  return (
    <div className="App">
      <Header />
      
      <Card title="Moje Zadania" className="main-card">
        <TaskList tasks={myTasks} />
      </Card>
    </div>
  );
}

export default App;