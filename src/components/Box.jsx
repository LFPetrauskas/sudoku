import React, { useState } from 'react';
import './Box.css';

export default props => {
    let [value, setValue] = useState(0);
    let x = props.x;
    let y = props.y;
    let rightBorder = (((x + 1) % 3) == 0) && x !== 8 ? 'right' : '';
    let bottomBorder = (((y + 1) % 3) == 0) && y !== 8 ? 'bottom' : '';
    let bg = value != '' ? 'bg' : '';


    return <select x={x} y={y} className={`box ${rightBorder} ${bottomBorder} ${bg}`} onChange={(e) => setValue(e.target.value)} value={value}>
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
