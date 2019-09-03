import {GameStore} from './game.store';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {PieceMove} from '../shared/board.model';
import {GameQuery} from './game.query';
import {combineLatest, merge} from 'rxjs';

export class GameService {

  constructor(private store: GameStore,
              private query: GameQuery,
              private http: HttpClient) {
  }

  makeMove(move) {
    return this.http.post('http://localhost:9921/make-move/', move).pipe(tap((makeMoveRes: MakeMoveResponse) => {
      if (makeMoveRes.isSuccess) {
        this.store.update(state => {
          return {
            board: state.board.updateWithMove(makeMoveRes.move),
            lastSelected: undefined
          };
        });
      }
    }));
  }

  selectCell(row: number, col: number) {
    return combineLatest(
      this.query.lastSelected$,
      this.query.board$
    ).pipe(tap(([lastSelected, board]) => {
      const currSelected = board.getPieceAt(row, col);
      if (!lastSelected) {
        if (currSelected.occupyingPiece) {
          this.store.update({
              lastSelected: currSelected,
              board: board.changeSelection(row, col, true)
            }
          );
        }
      } else if (currSelected.row == lastSelected.row && currSelected.col == lastSelected.col) {
        this.store.update({
          lastSelected: undefined,
          board: board.changeSelection(row, col, false)
        });
      } else {
        this.makeMove(new PieceMove(
          lastSelected,
          currSelected
        ));
      }
    }));
  }
}

class MakeMoveResponse {
  isSuccess: boolean;
  move: PieceMove[];
}
