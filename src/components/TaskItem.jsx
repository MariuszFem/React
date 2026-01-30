function TaskItem({ id, title, completed, priority, onDelete, onToggle, onChangePriority }) {
  return (
    <li style={{ 
      listStyle: 'none', 
      margin: '10px 0', 
      display: 'flex', 
      gap: '10px', 
      alignItems: 'center',
      borderBottom: '1px solid #eee',
      paddingBottom: '5px'
    }}>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={() => onToggle(id)} 
        style={{ cursor: 'pointer' }}
      />
      
      <span style={{ 
        textDecoration: completed ? 'line-through' : 'none',
        fontWeight: priority === 'high' ? 'bold' : 'normal',
        flexGrow: 1 
      }}>
        {title} 
      </span>

      <select 
        value={priority} 
        onChange={(e) => onChangePriority(id, e.target.value)}
        style={{ 
          padding: '2px', 
          borderRadius: '4px', 
          border: '1px solid #ccc',
          fontSize: '0.8em'
        }}
      >
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </select>
      
      <button 
        onClick={() => onDelete(id)}
        style={{ cursor: 'pointer', padding: '5px 10px' }}
      >
        Usuń
      </button>
    </li>
  );
}

export default TaskItem;