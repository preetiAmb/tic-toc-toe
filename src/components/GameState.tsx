import { useState } from "react";

export type Value = 'X' | 'O' | null;

export type BoardState = Value[];
const createBoardState = () => Array<Value>(16).fill(null);

function calculateWinner(boardState: BoardState) {
  const winningCombinations = [
    [0, 1, 2, 3],
    [4, 5, 6 ,7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15] 
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c, d] = winningCombinations[i];
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c] && boardState[d]) {
      return boardState[a];  
    }
  }
  return null;
}

export type GameState = {
  history: BoardState[],
  step: number,
}

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>({
    history: [createBoardState()],
    step: 0,
  });

  const current = gameState.history[gameState.step];
  const xIsNext = (gameState.step % 2) === 0;
  const winner = calculateWinner(current);

  function handleClick(square: number) {
    const history = gameState.history.slice(0, gameState.step + 1);
    const boardState = history[history.length - 1];
    if (calculateWinner(boardState) || boardState[square]) {
      return;
    }

    const newBoardState = boardState.slice();
    newBoardState[square] = (gameState.step % 2) === 0 ? 'X' : 'O';
    history.push(newBoardState);
    setGameState({
      history: history,
      step: history.length - 1,
    });
  }
  
  function jumpTo(step: number) {
    setGameState({
      history: gameState.history,
      step,
    });
  }
  
  return {
    gameState,
    current,
    xIsNext,
    winner,
    handleClick,
    jumpTo
  };
}