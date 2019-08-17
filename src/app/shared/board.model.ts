export class Board {
  private boardPieces: Map<string, BoardPiece> = new Map<string, BoardPiece>();

  private static boardMapKey(row: number, col: number) {
    return '' + row + ',' + col;
  }

  getPieceAt(row: number, col: number) {
    const a = this.boardPieces.get(Board.boardMapKey(row, col));
    return (a) ? a : new BoardPiece(row, col);
  }

  setPieceAt(row: number, col: number, piece: Piece) {
    this.boardPieces.set(Board.boardMapKey(row, col), new BoardPiece(row, col, piece));
  }

  setEmptyCell(row: number, col: number) {
    this.boardPieces.set(Board.boardMapKey(row, col), new BoardPiece(row, col));
  }
}

export class BoardPiece {

  constructor(public row: number,
              public col: number,
              public occupyingPiece?: Piece) {


  }
}

export class Piece {

  constructor(public color: PieceColor,
              public kind: PieceKind) {
  }

  getPieceName() {
    return 'chess-' + this.kind + '-' + this.color;
  }
}

export class PieceMove {

  constructor(public source: BoardPiece,
              public dest: BoardPiece) {
  }
}


export enum PieceColor {
  WHITE = 'white',
  BLACK = 'black'
}

export enum PieceKind {
  PAWN = 'pawn',
  KNIGHT = 'knight',
  BISHOP = 'bishop',
  ROOK = 'rook',
  QUEEN = 'queen',
  KING = 'king'
}
