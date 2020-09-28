export class Square {
  x: number;
  y: number;
  hasKnight: boolean;
  constructor(cordX: number, cordY: number, knight: boolean) {
    this.x = cordX;
    this.y = cordY;
    this.hasKnight = knight;
  }
}
