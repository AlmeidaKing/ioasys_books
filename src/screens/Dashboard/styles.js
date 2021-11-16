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

  @media screen and (max-width: 1024px) {
    padding: 42px 86px;
  }

  @media screen and (max-width: 768px) {
    padding: 42px 100px;
  }

  @media screen and (max-width: 425px) {
    padding: 16px;
  }

  section {
    max-width: 1136px;
    margin: 0 auto;
    width: 100%;
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;

    @media screen and (max-width: 1255px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 425px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .page-control {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    margin-top: 16px;

    font-size: 12px;
    line-height: 20px;

    span {
      margin-right: 8px;
      font-weight: 400;
    }

    b {
      font-weight: 500;
    }
  }
`;

export default Wrapper;
