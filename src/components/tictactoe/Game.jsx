import { useReducer, useState } from 'react';
import Board from './Board.jsx';
import "./GameStyles.css";
import { calculateWinner } from '../../helpers.jsx';
const initialState = {
    board: Array(9).fill(null),
    xIsNext: true
}
//
const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK': {
            const { board, xIsNext } = state;
            const { index, winner } = action.payload;
            if (winner || board[index]) return state;
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.board[index] = xIsNext ? "X" : "O";
            nextState.xIsNext = !xIsNext;
            return nextState;
        }
        case 'RESET':
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.board = Array(9).fill(null);
            nextState.xIsNext = true;
            return nextState;

        default:
            break;
    }
    return state;
}
const Game = () => {
    // const [board, setBoard] = useState(Array(9).fill(null));
    // const [xIsNext, setXisNext] = useState(true);
    const [state, dispatch] = useReducer(gameReducer, initialState);

    // const [state, setState] = useState({
    //     board: Array(9).fill(null),
    //     xIsNext: true
    // })
    const winner = calculateWinner(state.board);
    const handleClick = (index) => {
        const BoardCopy = [...state.board];
        if (winner || BoardCopy[index]) return;
        dispatch({
            type: 'CLICK',
            payload: { index, winner }
        });
        // BoardCopy[index] = state.xIsNext ? "X" : "O";
        // setBoard(BoardCopy);
        // setXisNext(!xIsNext);
        // setState({
        //     ...state,
        //     board: BoardCopy,
        //     xIsNext: !state.xIsNext
        // })
    }

    const handleReset = () => {
        dispatch({
            type: 'RESET',
            payload: { board: Array(9).fill(null), xIsNext: true }
        });
        // setBoard(Array(9).fill(null));
        // setXisNext(true);
        // setState(initialState);
    }

    return <div>
        <Board cells={state.board} onClick={handleClick}></Board>
        {winner ? <div className="game-winner">Winner: {winner}</div> : <div className="game-next">Next player: {state.xIsNext ? "X" : "O"}</div>}
        <button className="game-reset" onClick={handleReset}>Reset</button>
    </div>
}
export default Game;