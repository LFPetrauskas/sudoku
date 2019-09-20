import React from 'react';
import Box from '../components/Box';
import './Board.css';
let key = 0;
let board = [['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '']];


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
    }

    componentDidMount() {
        let boxes = [];
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                boxes.push(<Box key={`block${key++}`} col={col} row={row} changeBoardValue={this.changeBoardValue} />);
            }
        }
        this.setState({ boxes, board })
    }

    changeBoardValue(row, col, value) {
        let { board } = this.state;
        board[row][col] = value;
        this.setState({ board, message: '' })
        if (this.verifyRow(row, this.state.board) > 0 || this.verifyCol(col, this.state.board) > 0)
            this.setState({ message: 'Valor inválido' })
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
