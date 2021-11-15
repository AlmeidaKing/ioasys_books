import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;

  svg {
    ${({ toRight }) => (toRight ? 'transform: rotate(180deg);' : '')}
  }
`;

export default Wrapper;
