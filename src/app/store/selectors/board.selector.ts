import { createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import * as fromReducer from '../reducers/board.reducer';
import {Board} from '../../shared/board.model';

export interface ChessCommanderStore {
  boardState: fromReducer.BoardState;
}

export const reducers = {
  boardState: fromReducer.reducer
};

export const getChessCommanderState: MemoizedSelector<ChessCommanderStore, ChessCommanderStore> = createFeatureSelector(
  'chess-commander'
);


export const getBoardState: MemoizedSelector<ChessCommanderStore, fromReducer.BoardState> = createSelector(
  getChessCommanderState,
  (state: ChessCommanderStore) => state.boardState
);

export const getBoard: MemoizedSelector<ChessCommanderStore, Board> = createSelector(
  getBoardState,
  fromReducer.getBoardFromState
);



