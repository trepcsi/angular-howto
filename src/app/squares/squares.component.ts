import { Component, OnInit } from '@angular/core';
import { isThisTypeNode, textChangeRangeIsUnchanged } from 'typescript';
import { Chessboard } from '../chessboard.model';
import { DataService } from '../data.service';
import { GameStatus } from '../gamestatus.model';
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

  public status = new GameStatus("IN_GAME");

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
    this.dataService.getGameStatus()
      .subscribe(s => {this.status.status = s.status});

  }

  resetBoard(board: Chessboard[]){
    for(let i = 0; i < board.length; i++){
      if(board[i].piece!=null){
        if(!this.squares[board[i].x][board[i].y].hasKnight){
          this.squares[board[i].x][board[i].y].hasKnight=true;
          this.fromSquare=this.squares[board[i].x][board[i].y];
        }
      }else{
        this.squares[board[i].x][board[i].y].hasKnight=false;
      }
      this.squares[board[i].x][board[i].y].isTaken=!board[i].free;
    }
  }

  start(){
    if (this.inprogress) return;
    this.inprogress = true;
    this.dataService.startGame().subscribe(board => this.resetBoard(board));  
  }

  restart(){
    this.inprogress=false;
    this.start();
  }
}
