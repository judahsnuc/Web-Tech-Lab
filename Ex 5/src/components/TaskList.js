import React, { useState } from 'react';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Read One Piece' },
    { id: 2, text: 'Buy the Gotei 13 Captain Cloak' },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleAdd() {
    setTasks([...tasks, { id: Date.now(), text: newTaskText }]);
    setNewTaskText('');
  }

  return (
    <div>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
