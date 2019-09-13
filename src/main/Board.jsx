import React from 'react';
import Box from '../components/Box';
import './Board.css';
let key = 0;

export default props => {
    let boxes = [];
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            boxes.push(<Box key={`block${key++}`} y={y} x={x} />);
        }
    }
    return (
        <div className="board">
            {boxes}
        </div>);
}
