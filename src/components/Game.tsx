import * as React from 'react';
import { useGameState } from './GameState';
import { Log } from './Log';
import { Board } from './Board';
import { Row, Column} from './Layout';
import { Container, Player } from './Game-Style';

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
        <Row gap={60}>
        <Column gap={60}>
            <Player>{
            winner
                ? `Winner: ${winner}`
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