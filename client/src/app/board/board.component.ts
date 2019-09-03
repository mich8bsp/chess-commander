import {Component, OnInit} from '@angular/core';
import {Board, PieceColor} from '../shared/board.model';
import {Observable} from 'rxjs';
import {GameStore} from '../store/game.store';
import {GameQuery} from '../store/game.query';
import {GameService} from '../store/game.service';

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

  constructor(private gameQuery: GameQuery,
              private gameStore: GameStore,
              private gameService: GameService) {
  }

  ngOnInit() {
    this.opponentColor = (this.playerColor === PieceColor.WHITE) ? PieceColor.BLACK : PieceColor.WHITE;
    this.board$ = this.gameQuery.board$;


    this.board$.subscribe(v => console.log('tra', v));
  }

  selectCell(row: number, col: number){
    console.log("clicked on " + row  + ", " + col);

    this.gameService.selectCell(row, col);
  }
}
