import React from "react";
import { loadPlayers } from "../../Redux/modules/player";
import { connect } from "react-redux";
import "../../Css/players.css";

const Players = players => {
  return (
    <div className="players-list">
      {players.map((player, index) => (
        <div key={index}>
          {player.color} {player.score}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  players: state.player.players
});

const mapDispatchToProps = {
  loadPlayers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);
