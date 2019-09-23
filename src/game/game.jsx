import React from 'react';
import Box from '../components/Box';

export function initBoard() {
    let key = 0;
    let board = [['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '']];
    let boxes = [];
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let blocked = board[row][col] !== '' ? true : false;
            let initialValue = board[row][col];
            boxes.push(<Box key={`block${key++}`} col={col} row={row} changeBoardValue={changeBoardValue} blocked={blocked} value={initialValue} />);
        }
    }
    this.setState({ boxes, board })
}

// export function changeBoardValue(row, col, value) {
//     let { board } = this.state;
//     board[row][col] = value;
//     this.setState({ board, message: '' })
//     if (verifyRow(row, this.state.board) > 0 || verifyCol(col, this.state.board) > 0 || verifySqr(row, col, this.state.board) > 0)
//         this.setState({ message: 'Valor inválido' });
// }

export function verifyRow(row, board) {
    return verify(board[row].filter(val => val !== ''));
}

export function verifyCol(col, board) {
    let arr = [];
    for (let i = 0; i < 9; i++) {
        if (board[i][col] !== '') {
            arr.push(board[i][col]);
        }
    }
    return verify(arr)
}

export function verifySqr(row, col, board) {
    let arr = [];
    let [x, y] = [Math.floor((row) / 3) * 3, Math.floor((col) / 3) * 3];
    for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
            if (board[i][j] !== '')
                arr.push(board[i][j]);
        }
    }
    return verify(arr);
}

export function verify(arr) {
    let exists = false;
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (i === j) continue;
            if (arr[i] === arr[j]) {
                exists = true;
                break;
            }
        }
    }

    if (exists)
        return 1;
    return 0;
}