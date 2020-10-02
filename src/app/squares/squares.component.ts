import { Component, OnInit } from '@angular/core';
import { Chessboard } from '../chessboard.model';
import { DataService } from '../data.service';
import { Move } from '../move';
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

  public fromSquare: Move = new Move(0,0);
  public toSquare: Move;

  constructor(private dataService: DataService) {
    this.inprogress=false;
    this.squares = [];
    for (let i = 0; i < 8; i++) {
      this.squares[i] = [];
      for (let j = 0; j < 8; j++) {
        this.squares[i][j] = new Square(i, j, false);
      }
    }
  }

  ngOnInit(): void {}

  move(cell: Square) {
    if (!this.inprogress){
      return;
    }
    this.toSquare=new Move(cell.x,cell.y);
    var moves: Move[] = [];
    moves.push(this.fromSquare,this.toSquare);
    this.dataService.getBoard(moves)
      .subscribe(board => this.resetBoard(board));
  }

  resetBoard(board: Chessboard[]){
    for(let i = 0; i < board.length; i++){
      if(board[i].piece!=null){
        if(!this.squares[board[i].x][board[i].y].hasKnight){
          this.squares[board[i].x][board[i].y].hasKnight=true;
          this.fromSquare=this.toSquare;
        }
      }else{
        this.squares[board[i].x][board[i].y].hasKnight=false;
      }
      this.squares[board[i].x][board[i].y].isTaken=board[i].taken;
    }
  }

  start(){
    this.dataService.startGame().subscribe();
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
