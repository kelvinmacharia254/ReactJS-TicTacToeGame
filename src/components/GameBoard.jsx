
import {useState} from 'react'
// declare tictactoe board intial state
// use nested array
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({onselectSquare, activePlayer}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectedSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            // make a shallow copy. Spread operator only goes one level into an array, use it together with
            //  the map() method to go even deeper to make a shallow copy by iterating through the 2D array.
            // Here we are updating the state immutably by first make a copy of it
            const updatedBoard = [...prevGameBoard].map((innerArray)=>[...innerArray]);
            updatedBoard[rowIndex][colIndex] = activePlayer; //
            return updatedBoard; // return entire boardGame updated
        })
        onselectSquare();
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