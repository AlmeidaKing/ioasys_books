import styled from 'styled-components';

const Wrapper = styled.div`
  width: 272px;
  height: 160px;
  background-color: #ffffff;
  padding: 19px 16px;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  box-shadow: 0px 6px 24px 0px #54105f21;

  @media screen and (max-width: 425px) {
    width: 100%;
  }

  .image {
    width: 81px;
    height: 122px;
    background-color: orange;
    margin-right: 16px;
  }

  .book-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__headers {
      display: flex;
      flex-direction: column;

      &__title {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }

      &__author {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #ab2680;
      }
    }

    &__descriptions {
      display: flex;
      flex-direction: column;

      span {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #999999;
      }
    }
  }
`;

export default Wrapper;
