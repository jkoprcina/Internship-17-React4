import React from "react";
import { connect } from "react-redux";
import { removeResources } from "../../../Redux/modules/player";
import { changeRoadColor } from "../../../Redux/modules/board";
import {checkResources} from "../../../utils/checkResources";
import "../../../Css/Board/road.css";

const Road = ({
  index,
  type,
  roads,
  player,
  turn,
  changeRoadColor,
  checkResources,
  removeResources
}) => {
  const color = roads[index].color;
  function handleChangeRoadColorClick(index, player, color) {
    if (turn < 2) {
      if (color === "black" && player.leftToPlace.road !== 0) {
        changeRoadColor(index, player, color);
        return;
      }
    } else {
      console.log("here");
      if (!checkResources(player, "road")) {
        return <p>You don't have enough resources</p>;
      }
      removeResources(player, "road");
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
  roads: state.board.roads,
  turn: state.players.turn
});

const mapDispatchToProps = {
  changeRoadColor,
  checkResources,
  removeResources
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Road);
