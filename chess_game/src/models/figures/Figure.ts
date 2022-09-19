import {Colors} from "../Colors";
import {Cell} from "../Cell";
import logo from "../../assets/B_King.png"

export enum FigureNames {
    King = "King",
    Queen = "Queen",
    Bishop = "Bishop",
    Pawn = "Pawn",
    Knight = "Knight",
    Rook = "Rook",
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    idKey: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.King
        this.idKey = Math.random()
    }

    canMove(target: Cell) : boolean {
        if (this.color === target.figure?.color){
            return false;
        }
        if (target.figure?.name === FigureNames.King) {
            return false;
        }
        return true
    }

    moveFigure(target: Cell) {

    }
}