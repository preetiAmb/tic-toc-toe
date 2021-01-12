import * as React from 'react';
import { useGameState } from './GameState';
import { Log } from './Log';
import { Board } from './Board';
import { Row, Column} from './Layout';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f1f1f1;
  height: 100rem;
  width: 100rem;
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
`;

const Player = styled.button`
  margin-top: 4rem;
  margin-left: 8rem;
  font-size: 24px;
  font-weight: bold;
  max-width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin-top: 8rem;  
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 28px;
`;

function Game() {
  const {
    gameState,
    current,
    xIsNext,
    winner,
    jumpTo,
    handleClick,
  } = useGameState();

  return (
    <Container> 
       <Title>Tic-Toc-Toe</Title>
        <Row gap={100}>
        <Column gap={100}>
            <Player>{
            winner
                ? `Winner ${winner}`
                : `Next Player: ${xIsNext ? 'X' : 'O'}`
            }</Player>
            <Board board={current} onClick={handleClick} />       
        </Column>  
        <Log history={gameState.history} jumpTo={jumpTo}/>    
    </Row>
    </Container>
    
  );
}
export default Game;