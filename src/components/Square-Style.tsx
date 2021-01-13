import styled from 'styled-components';

export const StyledSquare = styled.button`
  width: 7rem;
  height: 6rem;
  background: white;
  color: black;
  border: 2px solid #e7e7e7;
  &:hover {
    background-color: #e7e7e7;
  }
  padding: 0;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition-duration: 0.4s;
  cursor: pointer;
`;