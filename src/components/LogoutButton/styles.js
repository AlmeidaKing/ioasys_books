import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    transition-duration: 150ms;
    opacity: 0.4;
  }
`;

export default Wrapper;
