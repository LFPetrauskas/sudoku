import React from 'react';
import Box from '../components/Box';
import './Board.css';
let key = 0;
let board = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]];


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

    }

    componentWillMount() {
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
        if (this.state.verifyRow(row, value) > 1 || this.state.verifyCol(col, value) > 1)
            this.setState({message: 'Valor inválido'})
    }

    verifyRow(row, value, board) {
        let result = board[row].filter(val => val === value);
        return result.length;
    }

    verifyCol(col, value, board) {
        let result = board.filter(x => x[col] === value);
        return result.length;
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
