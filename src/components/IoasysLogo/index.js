import React from 'react';

// styles:
import Wrapper from './styles';

// icons:
import IoasysLogoIcon from 'assets/icons/IoasysLogoIcon';

const IoasysLogo = ({ color }) => {
  return (
    <Wrapper color={color}>
      <IoasysLogoIcon />
      <span>Books</span>
    </Wrapper>
  );
};

export default IoasysLogo;
