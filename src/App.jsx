import {useState} from 'react'
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

// declare tictactoe board initial state
// use nested array
const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

// initial player names
const PLAYERS ={
    X:'Player 1',
    O :'Player 2'
}

// winning combinations data
import {WINNING_COMBINATIONS} from "./winningCombinations.js";
import GameOver from "./components/GameOver.jsx";

// Derive gameboard
function deriveGameBoard(gameTurns){
    let gameBoard = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])]; // GameBoard initial state

    // Derive gameBoard from gameTurns state
    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
    return gameBoard;
}

function deriveWinner(gameBoard, players){
    // winner logic
    // get the 1st, 2nd and 3rd square row & column indexes for each winning combination ...
    // ... fetch symbols using these indexes on current gameBoard state and see if they are equal.
    // if equal then there is a winner
    // if not, no winner
    let winner;

    for(const combinations of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column]
        const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column]
        const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column]

        if (
              firstSquareSymbol &&
              firstSquareSymbol === secondSquareSymbol &&
              firstSquareSymbol === thirdSquareSymbol
            ) {
              winner = players[firstSquareSymbol]
        }
    }
    return winner;
}
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
    // const[activePlayerSymbol, setActivePlayerSymbol] = useState("X");
    const [players, setPlayers] = useState(PLAYERS);
    const[gameTurns, setGameTurns] = useState([]);

    // Derive activePlayer from gameTurns state
    const activePlayer= deriveActivePlayer(gameTurns)

    // Derive gameBoard from gameTurns state
    let gameBoard = deriveGameBoard(gameTurns)

    let winner = deriveWinner(gameBoard, players)


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

    // game draw logic
    // Condition: all squares played and no winner is a draw
    const draw = gameTurns.length === 9 && !winner

    // reset game
    // trigger page reload by resetting GameTurns state
    function restart(){
        setGameTurns([])
    }

    function handlePlayerNameChange(symbol, newName){
        console.log(symbol, newName)
        setPlayers((prevPlayer) => {
            return {
                ...prevPlayer,
                [symbol]: newName,
            }
        });
    }

  return (
    <>
      <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                {/*use props to pass player 1 and player 2 details */}
                <Player
                    initialName={PLAYERS.X}
                    symbol='X'
                    isActive={activePlayer === "X"}
                    onChangeName={handlePlayerNameChange}
                />
                <Player
                    initialName={PLAYERS.O}
                    symbol='O'
                    isActive={activePlayer === "O"}
                    onChangeName={handlePlayerNameChange}
                />
            </ol>
            {(winner || draw ) && <GameOver winner={winner} onRestart ={restart}/>}
            <GameBoard
                onselectSquare={handleSelectSquare}
                board = {gameBoard}
            />
        </div>
        <Log turns={gameTurns}/>
      </main>
    </>
  )
}

export default App
