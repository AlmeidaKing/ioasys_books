import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 16px;
    position: fixed;
    overflow-y: scroll;
    max-height: 100%;
  }

  @media screen and (max-width: 425px) {
    padding: 64px 16px 16px;
    height: fit-content;
  }

  .close-button {
    width: 32px;
    height: 32px;
    background-color: #ffffff;
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms ease-in-out;
    position: absolute;
    top: 16px;
    right: 16px;

    :hover {
      opacity: 0.8;
    }

    :active {
      transition-duration: 150ms;
      opacity: 0.4;
    }
  }

  .container {
    padding: 48px;
    max-width: 769px;
    max-height: 608px;
    background-color: #ffffff;
    display: flex;

    @media screen and (max-width: 768px) {
      padding: 16px;
    }

    @media screen and (max-width: 425px) {
      flex-direction: column;
      max-width: unset;
      max-height: unset;
      margin-top: 15rem;
      height: 100%;
      width: 100%;
      padding: 24px;
    }

    @media screen and (max-width: 320px) {
      margin-top: 35rem;
    }

    .image {
      min-width: 349px;
      height: 512px;
      margin-right: 48px;

      @media screen and (max-width: 425px) {
        min-width: unset;
        width: 100%;
        height: 351px;
        margin-right: unset;
        margin-bottom: 24px;
      }
    }

    .modal-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      /* headers section */
      &__headers {
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 425px) {
          margin-bottom: 32px;
        }

        &__title {
          font-size: 28px;
          font-weight: 500;
          line-height: 40px;
          flex: 1;
        }

        &__authors {
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
          color: #ab2680;
        }
      }

      /* book-specs section */
      &__book-specs {
        font-size: 12px;

        @media screen and (max-width: 425px) {
          margin-bottom: 32px;
        }

        &__title {
          font-weight: 500;
          line-height: 30px;
        }

        &__content {
          display: flex;
          flex-direction: column;
          line-height: 20px;
          margin-top: 8px;

          &__row {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex: 1;
          }

          &__name {
            font-weight: 500;
          }

          &__spec {
            font-weight: 400;
            color: #999999;
          }
        }
      }

      /* company review section */
      &__company-review {
        display: flex;
        flex-direction: column;

        overflow-y: scroll;

        ::-webkit-scrollbar {
          width: 4px;
        }

        ::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 0 rgba(0, 0, 0, 0);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 10px #ab2680;
        }

        &__title {
          font-size: 12px;
          font-weight: 500;
          line-height: 30px;
        }

        &__review {
          margin-top: 4px;
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
          color: #999999;

          svg {
            margin-right: 4px;
          }
        }
      }
    }
  }
`;

export default Wrapper;
