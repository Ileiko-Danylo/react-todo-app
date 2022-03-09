import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddToDo = () => {
  const [text, setText] = useState('');

  const { addTask } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100000000),
      text,
    };

    addTask(newTodo);
  };

  return (
    <>
      <h3>Add new task</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(event) =>
              setText(event.target.value)
            }
            placeholder="Enter text of the task..."
          />
        </div>
        <button className="btn">Add Task</button>
      </form>
    </>
  );
};
