import {Cell} from "./Cell";
import {CELLS_IN_COLUM, CELLS_IN_ROW} from "../constants"
import {Colors} from "./Colors";
import {Pawn} from "./figures/Pawn";
import {Rook} from "./figures/Rook";
import {King} from "./figures/King";
import {Queen} from "./figures/Queen";
import {Knight} from "./figures/Knight";
import {Bishop} from "./figures/Bishop";

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
    public highLightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                target.available = !!selectedCell?.figure?.canMove(target)
            }
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        return newBoard;
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x]
    }

    private addBishops() {
        new Bishop(Colors.BLACK, this.getCell(2, 0))
        new Bishop(Colors.WHITE, this.getCell(2, 7))
        new Bishop(Colors.BLACK, this.getCell(5, 0))
        new Bishop(Colors.WHITE, this.getCell(5, 7))
    }

    private addKings() {
        new King(Colors.BLACK, this.getCell(4, 0))
        new King(Colors.WHITE, this.getCell(4, 7))
    }
    private addKnights() {
        new Knight(Colors.BLACK, this.getCell(1, 0))
        new Knight(Colors.WHITE, this.getCell(1, 7))
        new Knight(Colors.BLACK, this.getCell(6, 0))
        new Knight(Colors.WHITE, this.getCell(6, 7))

    }
    private addQueens() {
        new Queen(Colors.BLACK, this.getCell(3, 0))
        new Queen(Colors.WHITE, this.getCell(3, 7))
    }
    private addPawns() {
        for(let i = 0; i < 8; i++){
            new Pawn(Colors.BLACK, this.getCell(i, 1))
            new Pawn(Colors.WHITE, this.getCell(i, 6))
        }
    }
    private addRooks() {
        new Rook(Colors.BLACK, this.getCell(0, 0))
        new Rook(Colors.WHITE, this.getCell(0, 7))
        new Rook(Colors.BLACK, this.getCell(7, 0))
        new Rook(Colors.WHITE, this.getCell(7, 7))

    }

    public addFigures() {
        this.addBishops();
        this.addKings();
        this.addPawns();
        this.addQueens();
        this.addRooks();
        this.addKnights();
    }

}