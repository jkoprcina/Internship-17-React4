import React from "react";
import { connect } from "react-redux";
import { removeResources } from "../../../Redux/modules/player";
import { changeSettlementColor } from "../../../Redux/modules/board";
import { checkResources } from "../../../utils/checkResources";
import "../../../Css/Board/settlement.css";

const Settlement = ({
  index,
  type,
  isCity,
  settlements,
  player,
  turn,
  changeSettlementColor,
  checkResources,
  removeResources
}) => {
  const color = settlements[index].color;
  function handleChangeSettlementColorClick(index, player, color) {
    if (turn < 8) {
      if (color === "black" && player.leftToPlace.settlement !== 0) {
        changeSettlementColor(index, player, color);
        return;
      }
    } else {
      if (!checkResources(player, "settlement")) {
        return <p>You don't have enough resources</p>;
      }
      removeResources(player, "settlement");
      changeSettlementColor(index, player, color);
    }
  }
  return (
    <div
      className={"crossroad " + type + " " + color}
      onClick={() => handleChangeSettlementColorClick(index, player, color)}
    />
  );
};

const mapStateToProps = state => ({
  player: state.players.players[0],
  settlements: state.board.settlements,
  turn: state.players.turn
});

const mapDispatchToProps = {
  changeSettlementColor,
  checkResources,
  removeResources
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settlement);
