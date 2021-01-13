import * as React from 'react';
import { Value } from './GameState';
import { StyledSquare } from './Square-Style';

export type SquareProps = {
  value: Value;
  onClick: () => void;
};
export function Square(props: SquareProps) {
  return (
    <StyledSquare onClick={props.onClick}>
      {props.value}
    </StyledSquare>
  );
}