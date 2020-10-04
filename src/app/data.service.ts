import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chessboard } from './chessboard.model';
import { GameStatus } from './gamestatus.model';
import { Move } from './move';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  moveUrl = "http://localhost:8080/move"
  startUrl = "http://localhost:8080/start"
  statusUrl = "http://localhost:8080/status"

  constructor(private _http: HttpClient) { }

  getBoard(move: Move[]){
    return this._http.post<Chessboard[]>(this.moveUrl, move);
  }

  startGame(){
    return this._http.post<Chessboard[]>(this.startUrl,{});
  }

  getGameStatus(){
    return this._http.get<GameStatus>(this.statusUrl);
  }
}
