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
  return (
    <div
      className={"crossroad " + type + " " + color}
      onClick={() => changeSettlementColor(index, player, color)}
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
