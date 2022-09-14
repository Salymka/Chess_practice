import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import blackLogo from "../../assets/B_King.png"
import whiteLogo from "../../assets/W_King.png"
import {Cell} from "../Cell";


export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.King

    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        return true;
    }
}