import { Component, OnInit } from '@angular/core';
import { Chessboard } from '../chessboard.model';
import { DataService } from '../data.service';
import { Square } from '../square';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.css'],
})
export class SquaresComponent implements OnInit {

  public squares: Square[][];
  public inprogress: boolean;
  public chessboard$: Chessboard[];

  constructor(private dataService: DataService) {
    this.inprogress=false;
    this.squares = [];
    for (let i = 0; i < 8; i++) {
      this.squares[i] = [];
      for (let j = 0; j < 8; j++) {
        this.squares[i][j] = new Square(i, j, false);
      }
    }
    console.log(this.squares);
  }

  ngOnInit(): void {}

  move(cell: Square) {
    if (!this.inprogress){
      return;
    }
    this.squares.forEach((element) =>
      element.forEach((e) => (e.hasKnight = false))
    );
    this.squares[cell.x][cell.y].hasKnight = true;
  }

  start(){
    if(!this.inprogress){
      this.squares[0][0].hasKnight=true;
      this.inprogress=true;
    }


    //first try results in error
    //the second try properly gets the board
    this.dataService.getBoard()
      .subscribe(board => this.chessboard$ = board);
    this.chessboard$.forEach(i=>console.log(i))

  }

  restart(){
    this.inprogress=false;
    this.squares.forEach((element) =>
      element.forEach((e) => (e.hasKnight = false))
    );
    this.start();
  }
}
