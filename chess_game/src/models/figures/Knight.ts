import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/B_Knight.png"
import whiteLogo from "../../assets/W_Knight.png"



export class Knight extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.Knight

    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        return true;
    }
}