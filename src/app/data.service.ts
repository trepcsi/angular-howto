import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chessboard } from './chessboard.model';
import { Move } from './move';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://localhost:8080/move"

  constructor(private _http: HttpClient) { }

  getBoard(move: Move[]){
    return this._http.post<Chessboard[]>(this.url, move)
  }
}
