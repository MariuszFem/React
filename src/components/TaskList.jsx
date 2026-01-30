import TaskItem from './TaskItem';

function TaskList() {
  return (
    <ul style={{ padding: 0 }}>
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  );
}

export default TaskList;