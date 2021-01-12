import * as React from 'react';
import { BoardState } from './GameState';
import { SquareProps, Square } from './Square';
import { Column, Row } from "./Layout";
type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};
export function Board({ board, onClick }: BoardProps) {
  const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };
  return (
    <Column gap={0}>
      <Row gap={0}>
        <Square {...createProps(0)} />
        <Square {...createProps(1)} />
        <Square {...createProps(2)} />
        <Square {...createProps(3)} />
      </Row>
      <Row gap={0}>
        <Square {...createProps(4)} />
        <Square {...createProps(5)} />
        <Square {...createProps(6)} />
        <Square {...createProps(7)} />
      </Row>
      <Row gap={0}>
        <Square {...createProps(8)} />
        <Square {...createProps(9)} />
        <Square {...createProps(10)} />
        <Square {...createProps(11)} />
      </Row>
      <Row gap={0}>
        <Square {...createProps(12)} />
        <Square {...createProps(13)} />
        <Square {...createProps(14)} />
        <Square {...createProps(15)} />
      </Row>
    </Column>
  );
}