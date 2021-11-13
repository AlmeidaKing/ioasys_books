import React from 'react';

// icons:
import LogoutIcon from 'assets/icons/LogoutIcon';

// styles:
import Wrapper from './styles';

const LogoutButton = ({ onClick }) => {
  return (
    <Wrapper data-testid='logout-button' onClick={onClick}>
      <LogoutIcon />
    </Wrapper>
  );
};

export default LogoutButton;
