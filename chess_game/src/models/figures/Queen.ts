import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/B_Queen.png"
import whiteLogo from "../../assets/W_Queen.png"



export class Queen extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.Queen

    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        if (this.cell.isEmptyVertical(target)) {
            return true;
        }
        if (this.cell.isEmptyHorizontal(target)) {
            return true;
        }
        if (this.cell.isEmptyDiagonal(target)) {
            return true;
        }

        return false;
    }
}