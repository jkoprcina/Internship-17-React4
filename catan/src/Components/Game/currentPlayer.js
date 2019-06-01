import React from "react";

const CurrentPlayer = ({ player, NextPlayer }) => {
  return (
    <div>
      <span>{player.color}</span>
      <span>{player.score}</span>
      <span>{player.resources}</span>
      <button onClick={NextPlayer}>Next</button>
    </div>
  );
};

const mapStateToProps = state => ({
  player: state.player.player
});

const mapDispatchToProps = {
  loadPlayer,
  NextPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentPlayer);
