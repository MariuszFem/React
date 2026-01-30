function TaskItem() {
  return (
    <li style={{ listStyle: 'none', margin: '10px 0', display: 'flex', gap: '10px' }}>
      <input type="checkbox" />
      <span>Przykładowe zadanie</span>
      <button>Usuń</button>
    </li>
  );
}

export default TaskItem;