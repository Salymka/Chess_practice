import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/B_Checker.png"
import whiteLogo from "../../assets/W_Checker.png"


export class Checker extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.Checker;
    }
    // reserv(target: Cell): boolean {
    //    return
    //
    // }

    canMove(target: Cell): boolean {
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const absX = Math.abs(this.cell.x - target.x);
        const absY = Math.abs(this.cell.y - target.y);
        if (absX !== absY) {
            return false;
        }

        if(absX === 1 && target.y === this.cell.y + direction)
        {
            return target.board.getCell(target.x, target.y).isEmpty();
        }
        return false;
    }
    moveFigure(target: Cell) {
        super.moveFigure(target);

    }

}