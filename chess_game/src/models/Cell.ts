import {Colors} from "./Colors";
import {Figure, FigureNames} from "./figures/Figure";
import {Board} from "./Board";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean;
    idKey: number;

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.idKey = Math.random();

    }

    moveFigure(target: Cell) {
        if(this.figure && this.figure?.canMove(target)) {
            // if (this.figure.name === FigureNames.Checker){
            //     target.board.getCell((target.x - this.x) / 2, (target.y - this.y) / 2).figure = null;
            // }
            this.figure.moveFigure(target);
            target.figure = this.figure;
            target.figure.cell = target;
            this.figure = null;
        }
    }
    isEmpty(): boolean {
        return this.figure === null;
    }

    isEnemy(target: Cell): boolean {
        if (target.figure) {
            return this.figure?.color !== target.figure.color;
        }
        return false;
    }

    isEmptyVertical(target: Cell) {
        if (this.x !== target.x) {
            return false;
        }


        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);
        for (let y = min + 1; y < max; y++ ) {
            if (!this.board.getCell(this.x, y).isEmpty()) {
                return false;
            }
        }
        return true;
    }
    isEmptyHorizontal(target: Cell) {
        if (this.y !== target.y) {
            return false;
        }

        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);
        for (let x = min + 1; x < max; x++ ) {
            if (!this.board.getCell(x, this.y).isEmpty()) {
                return false;
            }
        }
        return true;
    }

    isEmptyDiagonal(target: Cell) {
        const absX = Math.abs(this.x - target.x);
        const absY = Math.abs(this.y - target.y);
        if (absX !== absY) {
            return false;
        }

        const dx = this.x < target.x ? 1 : -1;
        const dy = this.y < target.y ? 1 : -1;

        for (let i = 1; i < absY; i++) {
            if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
                return false;
            }
        }
        return true;
    }

}