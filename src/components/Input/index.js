import React, { useState } from 'react';

// components
import { Button } from 'components';

// styles:
import Wrapper from './styles';

const Input = ({
  value,
  onChangeText,
  label = '',
  placeholder = '',
  buttonText,
  onButtonClick,
  errorMessage = '',
  type = 'text',
  required,
  name,
  id,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleOnChange = (value) => {
    onChangeText(name, value);
    setInputValue(value);
  };

  const hasButtonComponent = buttonText;
  return (
    <Wrapper>
      <div className='input-container'>
        <label htmlFor={id} className='label'>
          {label}
        </label>
        <input
          id={id}
          value={inputValue}
          name={name}
          onChange={(e) => handleOnChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          required={required}
        />
      </div>
      {hasButtonComponent && (
        <div className='button-container'>
          <Button type='submit' onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      )}
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
    </Wrapper>
  );
};

export default Input;
