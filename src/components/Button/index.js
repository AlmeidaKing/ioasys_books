import React from 'react';

// styles:
import Wrapper from './styles';

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <Wrapper type={type} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;
