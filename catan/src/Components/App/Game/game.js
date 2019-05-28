import React from "react";
import Board from "./Board/board";
import Players from "./players";
import CurrentPlayer from "./currentPlayer";

class Game extends React.Component {
  render() {
    return (
      <div>
        <Players />
        <CurrentPlayer />
        <Board />
      </div>
    );
  }
}

export default Game;
