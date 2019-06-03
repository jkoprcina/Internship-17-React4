import React from "react";
import { connect } from "react-redux";
import { nextPlayer } from "../../Redux/modules/player";
import "../../Css/players.css";

const CurrentPlayer = ({ nextPlayer, players, turn, loadPlayer }) => {
  let player = players[0];
  for (var p in players) {
    if (p.index === turn % 4) {
      player = p;
    }
  }
  return (
    <div className="players-list">
      <p>Is playing: {player.color}</p>
      <p>Score: {player.score}</p>
      <p>Resources: </p>
      <p>brick: {player.resources.brick}</p>
      <p>wool: {player.resources.wool}</p>
      <p>lumber: {player.resources.lumber}</p>
      <p>ore: {player.resources.ore}</p>
      <p>wheat: {player.resources.wheat}</p>
      <button onClick={nextPlayer}>Next</button>
    </div>
  );
};

const mapStateToProps = state => ({
  players: state.players.players,
  turn: state.players.currentPlay
});

const mapDispatchToProps = {
  nextPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentPlayer);
