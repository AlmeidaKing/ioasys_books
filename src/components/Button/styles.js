import styled from 'styled-components';

const Wrapper = styled.button`
  width: fit-content;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 40px;

  color: #b22e6f;
  font-family: Heebo;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  transition: all 300ms ease-in-out;

  :hover {
    opacity: 0.8;
  }

  :active {
    transition-duration: 150ms;
    opacity: 0.4;
  }
`;

export default Wrapper;
