import { Component, OnInit } from '@angular/core';
import { Square } from '../square';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.css']
})
export class SquaresComponent implements OnInit {

  squares: Square[][] = [
    [{x:0, y:0, hasKnight:false},{x:1, y:0, hasKnight:false},{x:2, y:0, hasKnight:false},{x:3, y:0, hasKnight:false},{x:4, y:0, hasKnight:false},{x:5, y:0, hasKnight:false},{x:6, y:0, hasKnight:false},{x:7, y:0, hasKnight:false}],
    [{x:0, y:1, hasKnight:false},{x:1, y:1, hasKnight:false},{x:2, y:1, hasKnight:false},{x:3, y:1, hasKnight:false},{x:4, y:1, hasKnight:false},{x:5, y:1, hasKnight:false},{x:6, y:1, hasKnight:false},{x:7, y:1, hasKnight:false}],
    [{x:0, y:2, hasKnight:false},{x:1, y:2, hasKnight:false},{x:2, y:2, hasKnight:false},{x:3, y:2, hasKnight:false},{x:4, y:2, hasKnight:false},{x:5, y:2, hasKnight:false},{x:6, y:2, hasKnight:false},{x:7, y:2, hasKnight:false}],
    [{x:0, y:3, hasKnight:false},{x:1, y:3, hasKnight:false},{x:2, y:3, hasKnight:false},{x:3, y:3, hasKnight:false},{x:4, y:3, hasKnight:false},{x:5, y:3, hasKnight:false},{x:6, y:3, hasKnight:false},{x:7, y:3, hasKnight:false}],
    [{x:0, y:4, hasKnight:false},{x:1, y:4, hasKnight:false},{x:2, y:4, hasKnight:false},{x:3, y:4, hasKnight:false},{x:4, y:4, hasKnight:false},{x:5, y:4, hasKnight:false},{x:6, y:4, hasKnight:false},{x:7, y:4, hasKnight:false}],
    [{x:0, y:5, hasKnight:false},{x:1, y:5, hasKnight:false},{x:2, y:5, hasKnight:false},{x:3, y:5, hasKnight:false},{x:4, y:5, hasKnight:false},{x:5, y:5, hasKnight:false},{x:6, y:5, hasKnight:false},{x:7, y:5, hasKnight:false}],
    [{x:0, y:6, hasKnight:false},{x:1, y:6, hasKnight:false},{x:2, y:6, hasKnight:false},{x:3, y:6, hasKnight:false},{x:4, y:6, hasKnight:false},{x:5, y:6, hasKnight:false},{x:6, y:6, hasKnight:false},{x:7, y:6, hasKnight:false}],
    [{x:0, y:7, hasKnight:false},{x:1, y:7, hasKnight:false},{x:2, y:7, hasKnight:false},{x:3, y:7, hasKnight:false},{x:4, y:7, hasKnight:false},{x:5, y:7, hasKnight:false},{x:6, y:7, hasKnight:false},{x:7, y:7, hasKnight:false}]
  ];

  constructor() {
  }

  ngOnInit(): void {
    
  }

  move(cell: Square){
    this.squares.forEach(element=> element.forEach(e=>e.hasKnight=false))
    this.squares[cell.y][cell.x].hasKnight = true;
  }

}
