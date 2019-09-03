import { Query } from '@datorama/akita';
import {GameState, GameStore} from './game.store';

export class GameQuery extends Query<GameState> {
  board$ = this.select(state => state.board);
  lastSelected$ = this.select(state => state.lastSelected);

  constructor(protected store: GameStore) {
    super(store);
  }
}
