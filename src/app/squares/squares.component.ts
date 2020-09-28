import { Component, OnInit } from '@angular/core';
import { Square } from '../square';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.css'],
})
export class SquaresComponent implements OnInit {
  public squares: Square[][];
  public inprogress: boolean;
  constructor() {
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
  }

  restart(){
    this.inprogress=false;
    this.squares.forEach((element) =>
      element.forEach((e) => (e.hasKnight = false))
    );
    this.start();
  }
}
