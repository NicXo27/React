import React from 'react';

const Card = ({ title, children, style, ...restProps }) => {
  return (
    <div
      style={{
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        ...style
      }}
      {...restProps}
    >
      <h2 style={{ marginTop: 0, color: '#333' }}>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;