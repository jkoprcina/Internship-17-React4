import React from "react";
import { connect } from "react-redux";
import {} from "../../../Redux/modules/player";
import { changeSettlementColor } from "../../../Redux/modules/board";
import "../../../Css/Board/settlement.css";

const Settlement = ({
  index,
  type,
  isCity,
  changeSettlementColor,
  player,
  settlements
}) => {
  const color = settlements[index].color;
  function handleChangeSettlementColorClick(index, player, color) {
    if (color === "black" && player.leftToPlace.settlement !== 0) {
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
  settlements: state.board.settlements
});

const mapDispatchToProps = {
  changeSettlementColor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settlement);
