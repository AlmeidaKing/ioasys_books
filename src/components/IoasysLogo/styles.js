import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 28px;
  font-weight: 300;
  line-height: 40px;
  display: flex;
  gap: 16px;

  path,
  svg,
  span {
    fill: ${({ color = '#fff' }) => color};
    color: ${({ color = '#fff' }) => color};
  }
`;

export default Wrapper;
