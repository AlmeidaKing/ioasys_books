import styled from 'styled-components';

import bg_image from 'assets/images/login_background_image.png';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: url(${bg_image});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 115px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .inputs-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media screen and (max-width: 1024px) {
    background-position: 45%;
  }

  @media screen and (max-width: 425px) {
    padding: 16px;
    background-position: 45%;
  }
`;

export default Wrapper;
