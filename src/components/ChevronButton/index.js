import React from 'react';

// icons:
import ChevronIcon from 'assets/icons/ChevronIcon';

// styles:
import Wrapper from './styles';

const ChevronButton = ({ toRight = false, onClick }) => {
  return (
    <Wrapper toRight={toRight} onClick={onClick}>
      <ChevronIcon />
    </Wrapper>
  );
};

export default ChevronButton;
