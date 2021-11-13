import styled from 'styled-components';

import bg_image from 'assets/images/dashboard_background_image.png';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 42px 115px;
  background-image: url(${bg_image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    padding: 16px;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 425px) {
      margin-top: 26px;
    }

    .user-area-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;

      span {
        @media screen and (max-width: 425px) {
          display: none;
        }
      }

      b {
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
      }
    }
  }

  .books-container {
    margin-top: 42px;
  }
`;

export default Wrapper;
