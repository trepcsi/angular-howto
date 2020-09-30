import { Piece } from './piece.model';

export class Chessboard{
    x: number;
    y: number;

    piece: Piece;

    /*example json:
    [{
        "x": 0,
        "y": 0,
        "piece": {
            "Knight": {
                "killed": false,
                "white": true
            }
        }
    }, {
        "x": 0,
        "y": 1,
        "piece": null
    },...]*/
}