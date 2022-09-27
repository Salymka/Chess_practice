import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import YBar from "./components/YBar";
import XBar from "./components/XBar";

function App() {

    const [board, setBoard] = useState(new Board());

    useEffect(() => {
        restart()
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFiguresCheckers();
        setBoard(newBoard)
    }

    return (


        <div className={'app'}>
            <YBar/>
            <div style={{display: "flex", justifyContent: "center"}}>
                <XBar/>
                <BoardComponent
                    board={board}
                    setBoard={setBoard}
                />
                <XBar/>
            </div>
            <YBar/>
        </div>

    );
}

export default App;
