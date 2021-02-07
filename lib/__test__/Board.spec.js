Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = require("../Board");
it('Board has no winner', () => {
    const board = new Board_1.default();
    board.makeMove(1, 'X');
    expect(board.hasWinner()).toEqual(false);
});
it('it make a move on the board', () => {
    const board = new Board_1.default();
    const newBoardWithMove = board.makeMove(1, 'X');
    expect(newBoardWithMove.grid).toEqual(['X', '', '', '', '', '', '', '', '']);
});
it('it makes multiple moves on the board using the currentMark', () => {
    const board = new Board_1.default();
    let newBoardWithMove = board.makeMove(1, board.currentMark());
    newBoardWithMove = newBoardWithMove.makeMove(2, newBoardWithMove.currentMark());
    newBoardWithMove = newBoardWithMove.makeMove(3, newBoardWithMove.currentMark());
    expect(newBoardWithMove.grid).toEqual(['X', 'O', 'X', '', '', '', '', '', '']);
});
it('Board has a winner for a row scenerio', () => {
    const grid = ['X', 'X', 'X', '', '', '', '', '', ''];
    let board = new Board_1.default(grid);
    expect(board.hasWinner()).toEqual(true);
});
it('Board has a winner for a column scenerio', () => {
    const grid = ['X', '', '', 'X', '', '', 'X', '', ''];
    const board = new Board_1.default(grid);
    expect(board.hasWinner()).toEqual(true);
});
it('Board has a winner for a diagonal scenerio', () => {
    const grid = ['X', '', '', '', 'X', '', '', '', 'X'];
    const board = new Board_1.default(grid);
    expect(board.hasWinner()).toEqual(true);
});
it('Does not return true if there is no winner', () => {
    const grid = ['', '', '', 'X', 'X', '', '', '', ''];
    const board = new Board_1.default(grid);
    expect(board.hasWinner()).toEqual(false);
});
it('checks for a winner in rows', () => {
    const grid1 = ['X', 'X', 'X', '', '', '', '', '', ''];
    const grid2 = ['', '', '', 'X', 'X', 'X', '', '', ''];
    const grid3 = ['', '', '', '', '', '', 'X', 'X', 'X'];
    const board1 = new Board_1.default(grid1);
    const board2 = new Board_1.default(grid2);
    const board3 = new Board_1.default(grid3);
    expect(board1.hasWinner()).toEqual(true);
    expect(board2.hasWinner()).toEqual(true);
    expect(board3.hasWinner()).toEqual(true);
});
it('Win on columns', () => {
    const grid1 = ['X', '', '', 'X', '', '', 'X', '', ''];
    const grid2 = ['', 'X', '', '', 'X', '', '', 'X', ''];
    const grid3 = ['', '', 'X', '', '', 'X', '', '', 'X'];
    const board1 = new Board_1.default(grid1);
    const board2 = new Board_1.default(grid2);
    const board3 = new Board_1.default(grid3);
    expect(board1.hasWinner()).toEqual(true);
    expect(board2.hasWinner()).toEqual(true);
    expect(board3.hasWinner()).toEqual(true);
});
it('Win on diagonals', () => {
    const grid1 = ['X', '', '', '', 'X', '', 'X', '', 'X'];
    const grid2 = ['', '', 'X', '', 'X', '', 'X', '', ''];
    const board1 = new Board_1.default(grid1);
    const board2 = new Board_1.default(grid2);
    expect(board1.hasWinner()).toEqual(true);
    expect(board2.hasWinner()).toEqual(true);
});
it('check that position 4 is not empty', () => {
    const grid = ['', '', '', 'X', '', 'X', '', '', ''];
    const board = new Board_1.default(grid);
    board.makeMove(4, 'X');
    board.makeMove(6, 'X');
    expect(board.isPositionTaken(4)).toEqual(true);
});
it('check if a position is free', () => {
    const board = new Board_1.default();
    expect(board.isPositionTaken(1)).toEqual(false);
});
it('checks if a position is taken', () => {
    const grid = ['', '', 'X', '', '', 'X', '', '', ''];
    const board = new Board_1.default(grid);
    expect(board.isPositionTaken(3)).toEqual(true);
    expect(board.isPositionTaken(6)).toEqual(true);
});
it('check for 8 available moves on baord', () => {
    const grid = ['', '', '', 'X', '', '', '', '', ''];
    const board = new Board_1.default(grid);
    expect(board.availablePositionCount()).toEqual(8);
});
it('check for 5 available moves on baord', () => {
    const grid = ['', '', 'X', 'X', '', '', 'X', 'X', ''];
    const board = new Board_1.default(grid);
    expect(board.availablePositionCount()).toEqual(5);
});
it('check for 1 available moves on baord', () => {
    const grid = ['X', 'X', 'X', 'X', '', 'X', 'X', 'X', 'X'];
    const board = new Board_1.default(grid);
    expect(board.availablePositionCount()).toEqual(1);
});
it('check for actual draw on board', () => {
    const grid = ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O'];
    const board = new Board_1.default(grid);
    expect(board.isGameDraw()).toEqual(true);
});
it('checks for no Draw on board if there a Win', () => {
    const grid = ['O', 'X', 'X', 'X', 'O', 'O', 'X', 'X', 'X'];
    const board = new Board_1.default(grid);
    expect(board.isGameDraw()).toEqual(false);
});
it('checks for no Draw if there is still available Position on board', () => {
    const grid = ['O', 'O', 'X', 'X', 'O', 'O', 'X', 'X', ''];
    const board = new Board_1.default(grid);
    expect(board.isGameDraw()).toEqual(false);
});
it('checks for game over if there is a win on the board', () => {
    const grid = ['X', '', '', '', 'X', '', '', '', 'X'];
    const board = new Board_1.default(grid);
    expect(board.isGameOver()).toEqual(true);
});
it('checks for game over if there is a draw on the board', () => {
    const grid = ['O', 'X', 'X', 'X', 'O', 'O', 'X', 'X', 'X'];
    const board = new Board_1.default(grid);
    expect(board.isGameOver()).toEqual(true);
});
it('Does not return game over if there is not over', () => {
    const grid = ['O', 'X', 'X', 'X', 'O', '', 'X', 'X', ''];
    const board = new Board_1.default(grid);
    expect(board.isGameOver()).toEqual(false);
});
it('check that current mark is X for an empty board', () => {
    const grid = ['', '', '', '', '', '', '', '', ''];
    const board = new Board_1.default(grid);
    expect(board.availablePositionCount()).toBe(9);
    expect(board.currentMark()).toEqual('X');
});
it('check that current mark is O if the first player made a move', () => {
    const grid = ['X', '', '', '', '', '', '', '', ''];
    const board = new Board_1.default(grid);
    expect(board.availablePositionCount()).toBe(8);
    expect(board.grid).toContain('X');
    expect(board.currentMark()).toEqual('O');
});
it('check that all positions are free on the board', () => {
    const grid = ['', '', '', '', '', '', '', '', ''];
    const board = new Board_1.default(grid);
    const actual = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(board.availablePositions()).toEqual(actual);
});
it('returns available positions after moves were made', () => {
    const grid = ['X', '', '', 'O', 'X', '', '', '', ''];
    const board = new Board_1.default(grid);
    const actual = [2, 3, 6, 7, 8, 9];
    expect(board.availablePositions()).toEqual(actual);
});
it('checks if a move is valid', () => {
    const grid = ['X', '', '', '', '', '', '', '', ''];
    const board = new Board_1.default(grid);
    expect(board.isMoveValid(1)).toEqual(false);
    expect(board.isMoveValid(2)).toEqual(true);
});
it('checks that the winning player is X', () => {
    const grid = ['X', 'X', 'X', '', '', '', '', '', ''];
    const board = new Board_1.default(grid);
    expect(board.winningPlayer()).toEqual('X');
});
it('checks that the winning player is O', () => {
    const grid = ['O', 'O', 'O', '', '', '', '', '', ''];
    const board = new Board_1.default(grid);
    expect(board.winningPlayer()).toEqual('O');
});
it('checks that there is no winner on the board', () => {
    const grid = ['O', 'X', 'O', '', '', '', '', '', ''];
    const board = new Board_1.default(grid);
    expect(board.winningPlayer()).toEqual('');
});
