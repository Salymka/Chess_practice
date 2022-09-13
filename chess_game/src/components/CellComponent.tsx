import React, {FC} from 'react';
import {Cell} from "../models/Cell";
import {Colors} from "../models/Colors";
import {FigureNames} from "../models/figures/Figure";

interface CellProps {
    cell: Cell
}

const CellComponent: FC<CellProps> = ({cell}) => {
    return (
        <div
        className={['cell', cell.color].join(' ')}
        >
            {cell.figure?.logo &&
                <img src={cell.figure.logo}
                     alt={cell.figure.name}
                     className={(cell.figure.name === FigureNames.Pawn) ? "pawnBlack" : ""}
                />}
        </div>
    );
};

export default CellComponent;