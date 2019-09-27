import React from 'react';
import Box from '../components/Box';
// import {initBoard, verify, verifyCol, verifyRow, verifySqr,} from '../game/Game';
import './Board.css';

function Message(props) {
    return (
        <div>
            {props.message}
        </div>);
}

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            board: '',
            boxes: []
        };
        this.changeBoardValue = this.changeBoardValue.bind(this);
        this.verifyCol = this.verifyCol.bind(this);
        this.verifyRow = this.verifyRow.bind(this);
        this.verify = this.verify.bind(this);
        this.verifySqr = this.verifySqr.bind(this);
    }

    componentDidMount() {
        let key = 0;
        let board = this.initializeBoard('');
        let boxes = [];
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                let blocked = board[row][col] !== '' ? true : false;
                let initialValue = board[row][col];
                boxes.push(<Box key={`block${key++}`} col={col} row={row} changeBoardValue={this.changeBoardValue} blocked={blocked} value={initialValue} />);
            }
        }
        this.setState({ boxes, board })
    }

    initializeBoard(difficulty) {
        // let item = { value: '', possibilities: [1, 2, 3, 4, 5, 6, 7, 8, 9] };
        // let board = [[item, item, item, item, item, item, item, item, item],
        // [item, item, item, item, item, item, item, item, item],
        // [item, item, item, item, item, item, item, item, item],
        // [item, item, item, item, item, item, item, item, item],
        // [item, item, item, item, item, item, item, item, item],
        // [item, item, item, item, item, item, item, item, item],
        // [item, item, item, item, item, item, item, item, item],
        // [item, item, item, item, item, item, item, item, item],
        // [item, item, item, item, item, item, item, item, item]];

        let item = { value: '', possibilities: [1, 2, 3] };
        let board = [[item, item, item], [item, item, item], [item, item, item]];

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                let i = board[row][col];
                let lengthp = i.possibilities.length;
                let s = Math.floor(Math.random() * lengthp);
                let v = i.possibilities[s];
                board[row][col].value = v;
                for (let x = 0; x < 3; x++) {
                    board[x][col].possibilities = board[x][col].possibilities.filter(e => e !== v);
                }
                for (let y = 0; y < 3; y++) {
                    board[row][y].possibilities = board[row][y].possibilities.filter(e => e !== v);
                }
            }
        }

        console.log(board)
        // for (let row = 0; row < 9; row++) {
        //     let possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        //     for (let col = 0; col < 9; col++) {
        //         let proceed = false;
        //         while (!proceed) {
        //             let p = Math.floor(Math.random() * possibilities.length);
        //             board[row][col] = possibilities[p];
        //             if (this.verifyCol(col, board) === 0 && this.verifyRow(row, board) === 0 && this.verifySqr(row, col, board) === 0) {
        //                 proceed = true;
        //                 board[row][col] = possibilities[p];
        //             } else {
        //                 board[row][col] = '';
        //                 possibilities = possibilities.filter((x, y) => y !== p);
        //             }
        //         }

        //     }
        // }
        board = [['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '']];
        return board;
    }

    changeBoardValue(row, col, value) {
        let { board } = this.state;
        board[row][col] = value;
        this.setState({ board, message: '' })
        if (this.verifyRow(row, this.state.board) > 0 || this.verifyCol(col, this.state.board) > 0 || this.verifySqr(row, col, this.state.board) > 0)
            this.setState({ message: 'Valor inválido' });
    }

    verifyRow(row, board) {
        return this.verify(board[row].filter(val => val !== ''));
    }

    verifyCol(col, board) {
        let arr = [];
        for (let i = 0; i < 9; i++) {
            if (board[i][col] !== '') {
                arr.push(board[i][col]);
            }
        }
        return this.verify(arr)
    }

    verifySqr(row, col, board) {
        let arr = [];
        let [x, y] = [Math.floor((row) / 3) * 3, Math.floor((col) / 3) * 3];
        for (let i = x; i < x + 3; i++) {
            for (let j = y; j < y + 3; j++) {
                if (board[i][j] !== '')
                    arr.push(board[i][j]);
            }
        }
        return this.verify(arr);
    }

    verify(arr) {
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

    render() {
        return (
            <React.Fragment>
                <Message message={this.state.message} />
                <div className="board">
                    {this.state.boxes}
                </div>
            </React.Fragment >
        );
    }


}
