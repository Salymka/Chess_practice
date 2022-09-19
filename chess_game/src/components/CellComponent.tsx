import React, {FC} from 'react';
import {Cell} from "../models/Cell";
import {Colors} from "../models/Colors";
import {FigureNames} from "../models/figures/Figure";

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div
        className={['cell', cell.color, selected ? "selected" : '',
            cell.available && cell.figure ? "target" : ""].join(' ')}
        onClick={() => click(cell)}
        >
            {cell.available && !cell.figure && <div className={"available"}></div>}
            {cell.figure?.logo &&
                <img src={cell.figure.logo}
                     alt={cell.figure.name}
                     className={(cell.figure.name === FigureNames.Pawn) ? "pawns" : ""}
                />}
        </div>
    );
};

export default CellComponent;