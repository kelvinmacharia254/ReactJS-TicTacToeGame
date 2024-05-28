import {useState} from 'react'
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
    // state manage active player
    const[activePlayerSymbol, setActivePlayerSymbol] = useState("X");

    function handleSelectSquare(){
        // Every time a player plays, this state update is called to determine whose next.
        // The active player symbol is forwarded to the gameBoard component to update it.
        // Every new game starts with "X" then the active player updating cycle begins after 1st play.
        setActivePlayerSymbol((currentActivePlayer) => (currentActivePlayer === "X" ? "O" : "X"));
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
                    isActive={activePlayerSymbol === "X"}
                />
                <Player
                    initialName='Player 2'
                    symbol='O'
                    isActive={activePlayerSymbol === "O"}
                />
            </ol>

            <GameBoard
                onselectSquare={handleSelectSquare}
                activePlayer={activePlayerSymbol}
            />
        </div>

      </main>
    </>
  )
}

export default App
