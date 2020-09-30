import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chessboard } from './chessboard.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://localhost:8080"

  constructor(private _http: HttpClient) { }

  getBoard(){
    return this._http.get<Chessboard[]>(this.url)
  }
}
