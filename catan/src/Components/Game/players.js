import React, { Component } from "react";
import Player from "./player";
import "../../Css/players.css";

class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [
        { name: "red", score: 0 },
        { name: "blue", score: 0 },
        { name: "green", score: 0 },
        { name: "yellow", score: 0 }
      ]
    };
  }
  componentDidMount() {}
  render() {
    const { players } = this.state;
    return (
      <div className="players-list">
        {players.map((player, index) => (
          <Player key={index} name={player.name} score={player.score} />
        ))}
      </div>
    );
  }
}

export default Players;
