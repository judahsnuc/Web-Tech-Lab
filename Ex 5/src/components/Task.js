import React from 'react';

function Task({ task, onDelete }) {
  return (
    <div>
      {task.text}
      <span style={{ marginLeft: '5px' }}>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      </span>
    </div>
  );
}

export default Task;
