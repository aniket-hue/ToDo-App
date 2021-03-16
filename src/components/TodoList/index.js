import React, { useState } from 'react';
import './style.css';

const TodoList = ({ task, setTask, filter }) => {
  const [editId, setEditId] = useState('');
  const [editedTask, setEditedTask] = useState('');

  const deleteTask = (id) => {
    const newTodos = task.filter((el) => el.id !== id);
    setTask(newTodos);
  };

  const doneTask = (id) => {
    const newTodos = task.map((el) => {
      if (el.id === id)
        return {
          ...el,
          completed: !el.completed,
        };
      else return el;
    });
    setTask(newTodos);
  };

  const editTask = (id) => {
    const newTodos = task.map((el) => {
      if (el.id === id)
        return {
          ...el,
          newTask: editedTask,
        };
      else return el;
    });
    setTask(newTodos);
    setEditId('');
  };

  return (
    <div className="todo-wrapper">
      {task
        .sort((a, b) => a.completed - b.completed)
        .map(({ id, completed, newTask }) => {
          const divBox = (
            <div className="task-box-wrapper">
              <div key={id} className="task-box">
                <button
                  type="button"
                  className="done btn"
                  onClick={() => doneTask(id)}
                >
                  {completed ? 'Undone?' : 'Done?'}
                </button>
                <p
                  className={
                    completed ? 'task-field line-through' : 'task-field'
                  }
                >
                  {newTask}
                </p>
                <button
                  type="button"
                  className="delete btn"
                  onClick={() => deleteTask(id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="edit btn"
                  onClick={() => {
                    if (editId === id) setEditId('');
                    else setEditId(id);
                  }}
                >
                  Edit
                </button>
              </div>
              {editId === id && (
                <form className="edit-box" onSubmit={() => editTask(id)}>
                  <input
                    type="text"
                    className="edit-input"
                    placeholder="Edit task here"
                    onChange={(e) => setEditedTask(e.target.value)}
                  />
                  <button type="submit" className="apply btn">
                    Apply
                  </button>
                </form>
              )}
            </div>
          );

          if (filter === 'all' && (completed || true)) return divBox;
          else if (filter === 'active' && completed === false) return divBox;
          else if (filter === 'completed' && completed === true) return divBox;
          else return null;
        })}
    </div>
  );
};

export default TodoList;
