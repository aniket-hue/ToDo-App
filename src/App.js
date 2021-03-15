import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState('all');

  return (
    <div className="wrapper">
      <h1 className="heading">ToDo List</h1>
      <Form setTask={setTask} setFilter={setFilter} filter={filter} />
      {task.length === 0 ? (
        'No task yet!'
      ) : (
        <TodoList task={task} setTask={setTask} filter={filter} />
      )}
    </div>
  );
};

export default App;
