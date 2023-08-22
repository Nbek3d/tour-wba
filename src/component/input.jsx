import React, { useState } from 'react';

function InputComponent() {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('Hello');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayText(inputValue);
  };

  return (
    <div>
      <h1>{displayText}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder='write'
      />
      <button onClick={handleButtonClick}>Change Text</button>
    </div>
  );
}

export default InputComponent;
