import {useState} from 'react'
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";


function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X"; // player X goes first and switched after 'O' has played their turn

  /* update current player
  Condition:
  - On game start the current player is 'X' must have played the first turn(i.e.gameTurns.length > 0 ) to switch player to 'O'
  - On second play 'O' plays and so forth. The current player is switch between the two
  */
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {
    // state manage active player. But deprecate and derive from gameTurns to remove intersecting states
    // const[activePlayerSymbol, setActivePlayerSymbol] = useState("X");

    const[gameTurns, setGameTurns] = useState([]);

    const activePlayer= deriveActivePlayer(gameTurns) // Derive from gameBoard state

    function handleSelectSquare(rowIndex, colIndex) {
        // Every time a player plays, this state update is called to determine whose next
        //  and also update the gameBoard.
        // The active player symbol is forwarded to the gameBoard component to update it.
        // Every new game starts with "X" then the active player updating cycle begins after 1st play.

        // setActivePlayerSymbol((currentActivePlayer) => (currentActivePlayer === "X" ? "O" : "X"));


        setGameTurns((prevTurns) => {
            let currentPlayer = deriveActivePlayer(prevTurns)

            if(prevTurns.length >0 && prevTurns[0].player === "X"){
                currentPlayer = "O"
            }

            const updatedTurns = [
                {square:{row:rowIndex, col:colIndex}, player:currentPlayer},
                ...prevTurns
            ];
            return updatedTurns
        });
}
  return (
    <>
      <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                {/*use props to pass player 1 and player 2 details */}
                <Player
                    initialName='Player 1'
                    symbol='X'
                    isActive={activePlayer === "X"}
                />
                <Player
                    initialName='Player 2'
                    symbol='O'
                    isActive={activePlayer === "O"}
                />
            </ol>

            <GameBoard
                onselectSquare={handleSelectSquare}
                // activePlayer={activePlayerSymbol}
                turns = {gameTurns}
            />
        </div>

      </main>
    </>
  )
}

export default App
