import React from 'react';

export const ToDo = ({ task }) => {
  return <li className="task">{task.text}</li>;
};
