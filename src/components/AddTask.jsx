import { useState } from 'react';

function AddTask({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; 
    onAdd(text);
    setText(''); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Co jest do zrobienia?" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ flexGrow: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '8px 15px', cursor: 'pointer', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
        Dodaj
      </button>
    </form>
  );
}

export default AddTask;