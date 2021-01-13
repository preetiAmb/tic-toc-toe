import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  display: inline-block;
  font-style: 22px;
  margin-top: 7rem;
  font-weight: bold;
  line-height: 5px;
  display: block;
`;

export const Restart = styled.button`
  height: 2rem;
  width: 6rem;
  border: none;
  color: black;
  padding: 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
`;