import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoardCellComponent } from './board-cell/board-cell.component';
import {StoreModule} from '@ngrx/store';
import * as fromStore from './store';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('chess-commander', fromStore.reducers),
    // EffectsModule.forFeature(fromStore.effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
