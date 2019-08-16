import {Component, OnInit} from '@angular/core';
import {BoardCell, Piece, PieceColor, PieceKind} from '../shared/board-cell.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  private playerColor: PieceColor = PieceColor.WHITE;
  private opponentColor: PieceColor;

  private ROWS = 8;
  private COLS = 8;

  board: BoardCell[][];

  constructor() {
  }

  ngOnInit() {
    this.opponentColor = (this.playerColor === PieceColor.WHITE) ? PieceColor.BLACK : PieceColor.WHITE;
    this.board = [];

    for (let i = 0; i < this.ROWS; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.COLS; j++) {
        this.board[i][j] = new BoardCell(i, j);
      }
    }

    this.setupBoardPieces();
  }

  setupBoardPieces() {
    for (let j = 0; j < this.COLS; j++) {
      this.board[1][j].occupyingPiece = new Piece(this.opponentColor, PieceKind.PAWN);
      this.board[this.ROWS - 2][j].occupyingPiece = new Piece(this.playerColor, PieceKind.PAWN);

      if (j === 0 || j === this.COLS - 1) {
        this.board[0][j].occupyingPiece = new Piece(this.opponentColor, PieceKind.ROOK);
        this.board[this.ROWS - 1][j].occupyingPiece = new Piece(this.playerColor, PieceKind.ROOK);
      }

      if (j === 1 || j === this.COLS - 2) {
        this.board[0][j].occupyingPiece = new Piece(this.opponentColor, PieceKind.KNIGHT);
        this.board[this.ROWS - 1][j].occupyingPiece = new Piece(this.playerColor, PieceKind.KNIGHT);
      }

      if (j === 2 || j === this.COLS - 3) {
        this.board[0][j].occupyingPiece = new Piece(this.opponentColor, PieceKind.BISHOP);
        this.board[this.ROWS - 1][j].occupyingPiece = new Piece(this.playerColor, PieceKind.BISHOP);
      }

      if (j === 3) {
        this.board[0][j].occupyingPiece = new Piece(this.opponentColor, PieceKind.KING);
        this.board[this.ROWS - 1][j].occupyingPiece = new Piece(this.playerColor, PieceKind.KING);
      }

      if (j === 4) {
        this.board[0][j].occupyingPiece = new Piece(this.opponentColor, PieceKind.QUEEN);
        this.board[this.ROWS - 1][j].occupyingPiece = new Piece(this.playerColor, PieceKind.QUEEN);
      }
    }


  }

}
