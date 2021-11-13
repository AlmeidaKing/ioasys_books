import React from 'react';

// components
import { Button } from 'components';

// styles:
import Wrapper, { InputStyles } from './styles';

const Input = ({
  value,
  onChangeText,
  label = '',
  placeholder = '',
  buttonText,
  onButtonClick,
  errorMessage = '',
  type = 'text',
}) => {
  const hasButtonComponent = buttonText && onButtonClick;
  return (
    <Wrapper>
      <div className='input-container'>
        <span className='label'>{label}</span>
        <InputStyles
          value={value}
          onChange={onChangeText}
          placeholder={placeholder}
          hasButtonComponent={hasButtonComponent}
          type={type}
        />
      </div>
      {hasButtonComponent && (
        <div className='button-container'>
          <Button type='button' onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      )}
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
    </Wrapper>
  );
};

export default Input;
