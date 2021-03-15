import React from 'react';
import './style.css';

const TodoList = ({ task, setTask, filter }) => {
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

  return (
    <div className="todo-wrapper">
      {task.map(({ id, completed, newTask }) => {
        const divBox = (
          <div key={id} className="task-box">
            <button
              type="button"
              className="done btn"
              onClick={() => doneTask(id)}
            >
              Done?
            </button>
            <p className={completed ? 'task-field line-through' : 'task-field'}>
              {newTask}
            </p>
            <button
              type="button"
              className="delete btn"
              onClick={() => deleteTask(id)}
            >
              Delete
            </button>
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
