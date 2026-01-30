import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="app" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <Header />
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;