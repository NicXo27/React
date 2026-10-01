import React from 'react';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#f8fafc',
      padding: '20px'
    }}>
      <TaskManager />
    </div>
  );
}

export default App;