import React, { useState } from 'react';
import './style.css';

const Form = ({ setTask, setFilter, filter }) => {
  const [newTask, setNewTask] = useState('');

  const updateTodo = (e) => {
    e.preventDefault();

    // setTask((prevState) => {
    //   const newState = prevState;
    //   newState.push(newTask);
    //   return newState;
    // });

    if (newTask !== '') {
      setTask((prevState) =>
        prevState.concat({
          newTask,
          id: Math.random() * 1000,
          completed: false,
        })
      );

      setNewTask('');
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={updateTodo}>
        <input
          className="Todo-input"
          type="text"
          value={newTask}
          placeholder="Enter new task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className="create-btn">
          Add Task
        </button>
        <select
          className="select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
