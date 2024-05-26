
import React from "react";
// declare tictactoe board intial state
// use nested array
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard() {
    const [gameBoard, setGameBoard] = React.useState(initialGameBoard)

    function handleSelectedSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            // make a shallow copy. Spread operator only goes one level into an array
            // Use map() to make a shallow copy by iterating through the 2D array
            const updatedBoard = [...prevGameBoard].map((innerArray)=>[...innerArray]);
            updatedBoard[rowIndex][colIndex] = "X"; //
            return updatedBoard;
        })
    }

    return (
        <ol id="game-board"> {/* ol acts the board container for structure & styling purposes */}
            {gameBoard.map((row, rowIndex)=>(
                <li key={rowIndex}> {/* this holds each row with each row identified with a key = rowIndex */}
                    <ol>
                        {row.map((playerSymbol, colIndex)=>(
                            <li key={colIndex}>
                                <button
                                onClick={() =>
                                    handleSelectedSquare(rowIndex, colIndex)}
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