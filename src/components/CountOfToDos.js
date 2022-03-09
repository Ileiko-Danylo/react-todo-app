import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const CountOfToDos = () => {
  const { tasks } = useContext(GlobalContext);

  const count = tasks.length;
  return (
    <>
      <div>Your ToDos:</div>
      <h1>{count}</h1>
    </>
  );
};
