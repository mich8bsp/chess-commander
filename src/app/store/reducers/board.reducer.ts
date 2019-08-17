import * as fromAction from './../actions/board.action';
import {Board, BoardPiece, Piece, PieceColor, PieceKind} from '../../shared/board.model';

const ROWS = 8;
const COLS = 8;

export interface BoardState {
  board: Board;
}

const initialState: BoardState = {
  board: initializeBoard()
};

function initializeBoard() {
  console.log('initializing board');
  const newBoard: Board = new Board();
  for (let j = 0; j < COLS; j++) {
    newBoard.setPieceAt(1, j, new Piece(PieceColor.WHITE, PieceKind.PAWN));
    newBoard.setPieceAt(ROWS - 2, j, new Piece(PieceColor.BLACK, PieceKind.PAWN));

    if (j === 0 || j === COLS - 1) {
      newBoard.setPieceAt(0, j, new Piece(PieceColor.WHITE, PieceKind.ROOK));
      newBoard.setPieceAt(ROWS - 1, j, new Piece(PieceColor.BLACK, PieceKind.ROOK));
    }

    if (j === 1 || j === COLS - 2) {
      newBoard.setPieceAt(0, j, new Piece(PieceColor.WHITE, PieceKind.KNIGHT));
      newBoard.setPieceAt(ROWS - 1, j, new Piece(PieceColor.BLACK, PieceKind.KNIGHT));
    }

    if (j === 2 || j === COLS - 3) {
      newBoard.setPieceAt(0, j, new Piece(PieceColor.WHITE, PieceKind.BISHOP));
      newBoard.setPieceAt(ROWS - 1, j, new Piece(PieceColor.BLACK, PieceKind.BISHOP));
    }

    if (j === 3) {
      newBoard.setPieceAt(0, j, new Piece(PieceColor.WHITE, PieceKind.KING));
      newBoard.setPieceAt(ROWS - 1, j, new Piece(PieceColor.BLACK, PieceKind.KING));
    }

    if (j === 4) {
      newBoard.setPieceAt(0, j, new Piece(PieceColor.WHITE, PieceKind.QUEEN));
      newBoard.setPieceAt(ROWS - 1, j, new Piece(PieceColor.BLACK, PieceKind.QUEEN));
    }

    for (let i = 2; i < ROWS - 2; i++) {
      newBoard.setEmptyCell(i, j);
    }
  }

  console.log('initialized board', newBoard);
  return newBoard;
}


export function reducer(
  state = initialState,
  action: fromAction.BoardAction
): BoardState {
  switch (action.type) {
    case fromAction.MAKE_MOVE_SUCCESS: {
      return state;
    }
    case fromAction.MAKE_MOVE:
    case fromAction.MAKE_MOVE_FAIL: {
      return state;
    }
  }

  return state;
}

export const getBoardFromState = (state: BoardState) => state.board;
