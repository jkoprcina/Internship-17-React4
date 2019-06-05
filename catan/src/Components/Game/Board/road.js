import React from "react";
import { connect } from "react-redux";
import {} from "../../../Redux/modules/player";
import { changeRoadColor } from "../../../Redux/modules/board";
import "../../../Css/Board/road.css";

const Road = ({ index, type, changeRoadColor, roads, player }) => {
  const color = roads[index].color;
  function handleChangeRoadColorClick(index, player, color) {
    if (color === "black" && player.leftToPlace.road !== 0) {
      changeRoadColor(index, player, color);
    }
  }
  return (
    <div
      className={"road " + type + " " + color}
      onClick={() => handleChangeRoadColorClick(index, player, color)}
    />
  );
};

const mapStateToProps = state => ({
  player: state.players.players[0],
  roads: state.board.roads
});

const mapDispatchToProps = {
  changeRoadColor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Road);
