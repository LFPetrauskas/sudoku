import React, { useState } from 'react';
import './Box.css';

export default props => {
    let [value, setValue] = useState(0);
    let row = props.row;
    let col = props.col;
    let rightBorder = (((col + 1) % 3) === 0) && col !== 8 ? 'right' : '';
    let bottomBorder = (((row + 1) % 3) === 0) && row !== 8 ? 'bottom' : '';
    let bg = value !== 0 ? 'bg' : '';

    function change(e) {
        let val = e.target.value;
        setValue(val);
        props.changeBoardValue(row, col, val);
    }

    return <select row={row} col={col} className={`box ${rightBorder} ${bottomBorder} ${bg}`} onChange={change} value={value}>
        <option></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
    </select>;
}
