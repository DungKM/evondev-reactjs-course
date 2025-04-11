import { useState } from 'react';
import Board from './Board.jsx';
import "./GameStyles.css";
import { calculateWinner } from '../../helpers.jsx';
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = () => {};
    return <div>
        <Board cells={board} onClick={handleClick}></Board>
    </div>
}
export default Game;