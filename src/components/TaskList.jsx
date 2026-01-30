import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  // Obsługa pustej listy
  if (tasks.length === 0) {
    return <p>Brak zadań do wyświetlenia. Odpocznij! 😊</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} // Unikalny klucz (id, nie index!)
          id={task.id}
          title={task.title}
          completed={task.completed}
          priority={task.priority}
        />
      ))}
    </div>
  );
}

export default TaskList;