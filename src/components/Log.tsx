import * as React from 'react';
import styled from 'styled-components';
import { BoardState } from './GameState';
type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
}; 


const List = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  display: inline-block;
  font-style: 22px;
  margin-top: 9rem;
  font-weight: bold;
`;

const Restart = styled.button`
  height: 2rem;
  width: 6rem;
  margin-left: 8rem;
`;

export function Log(props: LogProps) {
  return (
     <List>
      {props.history.map((_, index) => {
        return (
          <li key={index}>
            <Restart onClick={() => props.jumpTo(index)}>
              {index === 0 ? 'Restart' : `move #${index}`}
            </Restart>
          </li>
        );
      })} 
    </List> 
  );
}