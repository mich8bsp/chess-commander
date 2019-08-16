export class BoardCell {

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
    return 'chess-' + this.kind + '-' +  this.color;
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
