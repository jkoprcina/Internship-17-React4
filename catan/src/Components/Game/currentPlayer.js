import React from "react";
import { connect } from "react-redux";
import { nextPlayer } from "../../Redux/modules/player";

const CurrentPlayer = ({ players, nextPlayer }) => {
  return (
    <div>
      <span>Red</span>
      <span>0</span>
      <span>0</span>
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
