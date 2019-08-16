import {Component, Input, OnInit} from '@angular/core';
import {BoardCell} from '../shared/board-cell.model';

@Component({
  selector: 'app-board-cell',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.scss']
})
export class BoardCellComponent implements OnInit {

  @Input() cell: BoardCell;

  constructor() {
  }

  ngOnInit() {
  }

}
