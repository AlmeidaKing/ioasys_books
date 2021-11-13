import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.32);
  height: 60px;
  max-width: 368px;
  border-radius: 4px;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  .input-container {
    display: flex;
    flex-direction: column;
    flex: 3;
  }

  .label {
    font-family: Heebo;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.5);
    flex: 1;
  }

  .button-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;

    @media screen and (max-width: 320px) {
      margin-left: unset;
    }
  }

  .error-message {
    position: absolute;
    top: calc(100% + 16px);
    left: 0;
    padding: 16px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: inherit;
    font-family: Heebo;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    color: #ffffff;

    ::before {
      content: '';
      width: 16px;
      height: 8px;
      background-color: rgba(255, 255, 255, 0.4);
      position: absolute;
      top: -7.8px;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
  }
`;

export const InputStyles = styled.input`
  outline: none;
  background-color: transparent;
  color: #ffffff;
  font-family: Heebo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  ::placeholder {
    color: inherit;
  }
`;

export default Wrapper;
