import {Action} from '@ngrx/store';
import {PieceMove} from '../../shared/board.model';

export const MAKE_MOVE = '[Board] Make move';
export const MAKE_MOVE_SUCCESS = '[Board] Make move Success';
export const MAKE_MOVE_FAIL = '[Board] Make move interpretation Fail';


export class MakeMove implements Action {
  readonly type = MAKE_MOVE;

  constructor(public move: PieceMove) {
  }
}

export class MakeMoveSuccess implements Action {
  readonly type = MAKE_MOVE_SUCCESS;

  constructor() {
  }
}

export class MakeMoveFail implements Action {
  readonly type = MAKE_MOVE_FAIL;

  constructor(public error: any) {
  }
}


export type BoardAction =
  | MakeMove
  | MakeMoveSuccess
  | MakeMoveFail;
