import React from "react";
import { connect } from "react-redux";
import {} from "../../../Redux/modules/player";
import { changeColor } from "../../../Redux/modules/board";
import "../../../Css/Board/road.css";

const Road = ({ index, color, type, players, turn, changeColor }) => {
  const player = players[0];
  for (var p in players) {
    if (p.index === turn % 4) {
      player = p;
    }
  }
  return (
    <div
      className={"road " + type + " " + color}
      onClick={() => changeColor(index, player)}
    />
  );
};

const mapStateToProps = state => ({
  players: state.players.players,
  turn: state.players.currentPlay
});

const mapDispatchToProps = {
  changeColor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Road);
