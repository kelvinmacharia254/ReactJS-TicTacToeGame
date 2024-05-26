import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {

  return (
    <>
      <main>
        <div id="game-container">
            <ol id="players">
                <Player initialName='Player 1' symbol='X'/>  {/*use props to pass player 1 and player 2 details */}
                <Player initialName='Player 2' symbol='0'/>
            </ol>
        </div>
          <GameBoard />
      </main>
    </>
  )
}

export default App
