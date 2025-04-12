import { useState } from 'react';
import Board from './Board.jsx';
import "./GameStyles.css";
import { calculateWinner } from '../../helpers.jsx';
const Game = () => {
    // const [board, setBoard] = useState(Array(9).fill(null));
    // const [xIsNext, setXisNext] = useState(true);
    const [state, setState] = useState({
        board: Array(9).fill(null),
        xIsNext: true
    })
    const winner = calculateWinner(state.board);
    const handleClick = (index) => {
        const BoardCopy = [...state.board];
        if (winner || BoardCopy[index]) return;
        BoardCopy[index] = state.xIsNext ? "X" : "O";
        // setBoard(BoardCopy);
        // setXisNext(!xIsNext);
        setState({
            ...state,
            board: BoardCopy,
            xIsNext: !state.xIsNext
        })
    }

    return <div>
        <Board cells={state.board} onClick={handleClick}></Board>
        {winner ? <div className="game-winner">Winner: {winner}</div> : <div className="game-next">Next player: {state.xIsNext ? "X" : "O"}</div>}
        <button className="game-reset" onClick={() => {
            setState({
                ...state,
                board: Array(9).fill(null),
                xIsNext: true
            })
        }}>Reset</button>
    </div>
}
export default Game;