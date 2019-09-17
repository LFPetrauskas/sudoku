import React, { useState } from 'react';
import Box from '../components/Box';
import './Board.css';
let key = 0;
let b = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]];

export default props => {
    let [message, setMessage] = useState('');
    let [board, setBoard] = useState(b)
    let boxes = [];

    function changeBoardValue(row, col, value) {
        b[row][col] = value;
        setBoard(b)
        // setMessage('');
        if (verifyRow(row, value) > 1 || verifyCol(col, value) > 1)
            // setMessage('Valor inválido')
            console.log('Valor inválido')
    }

    function verifyRow(row, value) {
        let result = board[row].filter(val => val === value);
        return result.length;
    }

    function verifyCol(col, value) {
        let result = board.filter(x => x[col] === value);
        return result.length;
    }

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            boxes.push(<Box key={`block${key++}`} col={col} row={row} changeBoardValue={changeBoardValue} />);
        }
    }
    return (
        <React.Fragment>
            {message}
            <div className="board">
                {boxes}
            </div>
        </React.Fragment>
    );
}
