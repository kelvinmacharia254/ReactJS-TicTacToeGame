export default function GameBoard({onselectSquare, board}) {

    // function handleSelectedSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         // make a deep copy. Spread operator only goes one level into an array, use it together with
    //         //  the map() method to go even deeper to make a deep copy by iterating through the 2D array.
    //         // Here we are updating the state immutably by first make a copy of it
    //         const updatedBoard = [...prevGameBoard].map((innerArray)=>[...innerArray]);
    //         updatedBoard[rowIndex][colIndex] = activePlayer; //
    //         return updatedBoard; // return entire boardGame updated
    //     })
    //     onselectSquare();
    // }

    return (
        <ol id="game-board"> {/* ol acts the board container for structure & styling purposes */}
            {board.map((row, rowIndex)=>(
                <li key={rowIndex}> {/* this holds each row with each row identified with a key = rowIndex */}
                    <ol>
                        {row.map((playerSymbol, colIndex)=>(
                            <li key={colIndex}>
                                <button
                                onClick={() =>
                                    onselectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol != null} // disable when played to avoid overwrite
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))
                        }
                    </ol>
                </li>
            ))
            }
        </ol>
    )
}