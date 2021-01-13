import * as React from 'react';
import { BoardState } from './GameState';
import { List, Restart } from './Log-Style';


type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
}; 


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