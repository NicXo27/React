import React, { useState } from 'react';
import Card from './Card';
import TaskItem from './TaskItem';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Implementar patrón Abstract Factory en Java', isCompleted: true },
    { id: 2, text: 'Diseñar el diagrama Entidad-Relación', isCompleted: false },
    { id: 3, text: 'Configurar PostgreSQL en pgAdmin 4', isCompleted: false }
  ]);

  const handleToggle = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const cardAttributes = {
    'aria-label': 'Gestor de proyectos',
    className: 'project-board-container',
    id: 'main-board'
  };

  return (
    <Card 
      title="Proyectos de Arquitectura de Software" 
      style={{ maxWidth: '450px', fontFamily: 'sans-serif', width: '100%' }} 
      {...cardAttributes}
    >
      <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
        Haz clic en una tarea para completarla o elimínala de la lista.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
            title={`Tarea: ${task.text}`}
          />
        ))}
      </ul>
    </Card>
  );
};

export default TaskManager;