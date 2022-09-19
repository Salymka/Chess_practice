import React, {useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";
import XBar from "./XBar";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        highLightCells()
    },[selectedCell])

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        }else {
            setSelectedCell(cell);
        }

    }

    function highLightCells() {
        board.highLightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div className={"board"}>

            {board.cells.map((row, index) =>
            <React.Fragment key={index}>
                {row.map(cell =>
                <CellComponent
                    click={click}
                    cell={cell}
                    key={cell.idKey}
                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}

                />
                )}
            </React.Fragment>
            )}

        </div>
    )
};

export default BoardComponent;