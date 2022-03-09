import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  tasks: [
    { id: 1, text: 'Hello world' },
    { id: 2, text: 'Hello world2' },
    { id: 3, text: 'Hello world3' },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    AppReducer,
    initialState
  );

  // function deleteTask(id){}

  function addTask(task) {
    dispatch({
      type: 'ADD_TASK',
      payload: task,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ tasks: state.tasks, addTask }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
