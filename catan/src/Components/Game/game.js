import React from "react";
import Board from "./Board/board";
import Players from "./players";
import CurrentPlayer from "./currentPlayer";
import "../../Css/game.css";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="playerInfo">
          <Players />
          <CurrentPlayer />
        </div>
        <div className="board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;
