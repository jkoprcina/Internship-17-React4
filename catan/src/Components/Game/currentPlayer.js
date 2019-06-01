import React from "react";
import { connect } from "react-redux";
import { nextPlayer } from "../../Redux/modules/player";
import "../../Css/players.css";

const CurrentPlayer = ({ players, nextPlayer }) => {
  return (
    <div className="players-list">
      <p>Is playing: Red</p>
      <p>Score: 0</p>
      <p>Resources: 0</p>
      <button onClick={nextPlayer}>Next</button>
    </div>
  );
};

const mapStateToProps = state => ({
  players: state.players.players
});

const mapDispatchToProps = {
  nextPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentPlayer);
