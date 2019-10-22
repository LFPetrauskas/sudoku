function verify(arr) {
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

function verifyCol(col, board) {
    let arr = [];
    for (let i = 0; i < 9; i++) {
        if (board[i][col] !== '') {
            arr.push(board[i][col]);
        }
    }
    return verify(arr)
}

function verifyRow(row, board) {
    return verify(board[row].filter(val => val !== ''));
}

function verifySqr(row, col, board) {
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

function checkBoard(board, row, col, value) {
    board[row][col] = value;
    let message = '';
    if (verifyRow(row, board) > 0 || verifyCol(col, board) > 0 || verifySqr(row, col, board) > 0)
        message = 'Valor inválido';
    return ({board, message});
}

function initBoard() {
    let board = [['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '']];
    return board;
}

export { initBoard, checkBoard, verifyCol, verifyRow, verifySqr }