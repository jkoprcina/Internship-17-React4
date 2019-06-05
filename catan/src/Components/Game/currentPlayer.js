import React from "react";
import { connect } from "react-redux";
import { nextPlayer } from "../../Redux/modules/player";
import "../../Css/players.css";

const CurrentPlayer = ({ nextPlayer, player, turn }) => {
  if (turn < 9) {
    return (
      <div className="players-list">
        <p>
          Is playing: <b>{player.color}</b>
        </p>
        <p>
          Place {player.leftToPlace.road} roads and{" "}
          {player.leftToPlace.settlement} cities
        </p>
        <p>Your city must be places adjacent to one of your roads</p>
        {player.leftToPlace.road === 0 &&
        player.leftToPlace.settlement === 0 ? (
          <p />
        ) : (
          <button onClick={nextPlayer}>Next</button>
        )}
      </div>
    );
  } else {
    return (
      <div className="players-list">
        <p>Is playing: {player.color}</p>
        <p>
          Roled: <b>{}</b>
        </p>
        <p>Score: {player.score}</p>
        <p>Resources: </p>
        <p className="resources">brick: {player.resources.brick}</p>
        <p className="resources">wool: {player.resources.wool}</p>
        <p className="resources">lumber: {player.resources.lumber}</p>
        <p className="resources">ore: {player.resources.ore}</p>
        <p className="resources">grain: {player.resources.grain}</p>
        <button onClick={nextPlayer}>Next</button>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  player: state.players.players[0],
  turn: state.players.turn
});

const mapDispatchToProps = {
  nextPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentPlayer);
