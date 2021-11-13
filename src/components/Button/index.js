import React from 'react';

// styles:
import Wrapper from './styles';

const Button = ({ children, onClick }) => {
  return (
    <Wrapper type='button' onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;
