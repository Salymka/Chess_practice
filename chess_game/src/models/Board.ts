import {Cell} from "./Cell";
import {CELLS_IN_COLUM, CELLS_IN_ROW} from "../constants"
import {Colors} from "./Colors";

export class Board {
    cells: Cell[][] = [];


    public initCells() {
        for(let rowCounter = 0; rowCounter<CELLS_IN_ROW; rowCounter++) {
            const row: Cell[] = [];
            for(let columCounter = 0; columCounter<CELLS_IN_COLUM; columCounter++) {
                if ((rowCounter + columCounter) % 2 !== 0){
                    row.push(new Cell(this, columCounter, rowCounter, Colors.BLACK, null))
                }else {
                    row.push(new Cell(this, columCounter, rowCounter, Colors.WHITE, null))
                }
            }
            this.cells.push(row);
        }
    }
}