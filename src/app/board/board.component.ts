import {Component, OnInit} from '@angular/core';
import {Board, PieceColor} from '../shared/board.model';
import {select, Store} from '@ngrx/store';
import * as fromStore from './../store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  private playerColor: PieceColor = PieceColor.WHITE;
  private opponentColor: PieceColor;

  public board$: Observable<Board>;

  rowsRange: Array<number> = Array.from(Array(8).keys());
  colsRange: Array<number> = Array.from(Array(8).keys());

  constructor(private store: Store<fromStore.ChessCommanderStore>) {
  }

  ngOnInit() {
    this.opponentColor = (this.playerColor === PieceColor.WHITE) ? PieceColor.BLACK : PieceColor.WHITE;
    this.board$ = this.store.pipe(select(fromStore.getBoard));


    this.board$.subscribe(v => console.log('tra', v));
  }

  // getCell(row: number, col: number): Observable<BoardPiece> {
  //   console.log('fetching cell (' + row + ', ' + col + ') ');
  //   return this.board$.pipe(
  //     map(
  //       v => {
  //         console.log('fetching cell (' + row + ', ' + col + ') with board ', v);
  //         const key = '' + row + ',' + col;
  //         return v.get(key);
  //       }
  //     )
  //   );
  // }

}
