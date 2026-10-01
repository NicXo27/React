import React from 'react';

const TaskItem = ({ task, onToggle, onDelete, style, ...restProps }) => {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        borderBottom: '1px solid #eee',
        textDecoration: task.isCompleted ? 'line-through' : 'none',
        color: task.isCompleted ? '#94a3b8' : '#0f172a',
        ...style
      }}
      {...restProps}
    >
      <span onClick={() => onToggle(task.id)} style={{ cursor: 'pointer', flexGrow: 1 }}>
        {task.text}
      </span>
      <button 
        onClick={() => onDelete(task.id)} 
        style={{ color: '#ef4444', border: 'none', background: 'none', cursor: 'pointer' }}
      >
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;