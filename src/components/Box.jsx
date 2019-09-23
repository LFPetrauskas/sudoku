import React, { useState } from 'react';
import './Box.css';


const SelectBox = props =>
    <select row={props.row} col={props.col} className={props.className} onChange={props.change} value={props.value}>
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

const TextBox = props =>
    <input type="text" defaultValue={props.value} disabled={true} />

export default props => {
    let [value, setValue] = useState('');
    if (props.blocked && props.value) {
        // setValue(props.value);
        value = props.value;
    }


    let row = props.row;
    let col = props.col;
    let rightBorder = (((col + 1) % 3) === 0) && col !== 8 ? 'right' : '';
    let bottomBorder = (((row + 1) % 3) === 0) && row !== 8 ? 'bottom' : '';
    let bg = value !== '' ? 'bg' : '';

    function change(e) {
        let val = e.target.value;
        setValue(val);
        props.changeBoardValue(row, col, val);
    }
    return props.blocked ? <TextBox value={value} /> : <SelectBox row={row} col={col} className={`box ${rightBorder} ${bottomBorder} ${bg}`} change={change} value={value} />
}
