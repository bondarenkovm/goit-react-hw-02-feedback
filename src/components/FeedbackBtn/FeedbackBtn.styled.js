import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const Button = styled.button`
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
  border: none;
  color: #fff;
  background-color: ${({ id }) => {
    switch (id) {
      case 'good':
        return 'green';
      case 'neutral':
        return '#ffa200';
      case 'bad':
        return 'red';
      default:
        return 'black';
    }
  }};
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 0.9;
  }
`;
