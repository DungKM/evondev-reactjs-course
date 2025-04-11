import { useState } from 'react';
import Board from './Board.jsx';
import "./GameStyles.css";
import { calculateWinner } from '../../helpers.jsx';
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        const BoardCopy = [...board];
        if (winner || BoardCopy[index]) return;
        BoardCopy[index] = xIsNext ? "X" : "O";
        setBoard(BoardCopy);
        setXisNext(!xIsNext);
    }

    return <div>
        <Board cells={board} onClick={handleClick}></Board>
        {winner ? <div className="game-winner">Winner: {winner}</div> : <div className="game-next">Next player: {xIsNext ? "X" : "O"}</div>}
       <button className="game-reset" onClick={() => { setBoard(Array(9).fill(null)); setXisNext(true); }}>Reset</button>
    </div>
}
export default Game;