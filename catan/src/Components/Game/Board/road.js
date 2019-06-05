import React from "react";
import { connect } from "react-redux";
import { checkResources } from "../../../Redux/modules/player";
import { changeRoadColor } from "../../../Redux/modules/board";
import "../../../Css/Board/road.css";

const Road = ({ index, type, changeRoadColor, roads, player, turn }) => {
  const color = roads[index].color;
  function handleChangeRoadColorClick(index, player, color) {
    if (color === "black" && player.leftToPlace.road !== 0) {
      if (turn > 8) {
        if (!checkResources("road")) {
          return <p>You don't have enough resources</p>;
        }
        removeResources(player, "road");
      }
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
  checkResources
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Road);
