function TaskItem({ id, title, completed = false, priority = "medium" }) {
  return (
    <li style={{ 
      listStyle: 'none', 
      margin: '10px 0', 
      display: 'flex', 
      gap: '10px', 
      alignItems: 'center' 
    }}>
      <input type="checkbox" checked={completed} readOnly />
      
      <span style={{ 
        textDecoration: completed ? 'line-through' : 'none',
        fontWeight: priority === 'high' ? 'bold' : 'normal'
      }}>
        {title} 
      </span>

      <span style={{ fontSize: '0.8em', color: '#666' }}>
        ({priority})
      </span>
      
      <button>Usuń</button>
    </li>
  );
}

export default TaskItem;