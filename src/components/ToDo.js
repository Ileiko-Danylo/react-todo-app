import React, { useState } from 'react';

export const ToDo = ({ task }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <li className={isChecked ? 'checked' : 'unchecked'}>
      {task.text}
      <input
        type="checkbox"
        value="Done"
        checked={isChecked}
        onChange={handleOnChange}
      />
    </li>
  );
};
