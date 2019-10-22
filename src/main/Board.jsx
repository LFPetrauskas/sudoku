import React from 'react';
import Box from '../components/Box';
import { initBoard, checkBoard } from '../game/Game';
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
    }

    componentDidMount() {
        let key = 0;
        let board = initBoard('');
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

    changeBoardValue(row, col, value) {
        this.setState(checkBoard(this.state.board, row, col, value));
    }

    render() {
        return (
            <React.Fragment>
                <Message message={this.state.message} />
                <div className="board">
                    {this.state.boxes}
                </div>
            </React.Fragment>
        );
    }
}
