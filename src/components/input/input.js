


import React from 'react';

function Input({ onInputChange }) {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    onInputChange(inputValue);
  };

  return (
    <input type="text" onChange={handleChange} placeholder="Search..." />
  );
}

export default Input;
