import React from "react";
import { connect } from "react-redux";
import { getCurrentPlayer } from "../../../Redux/modules/player";
import {
  changeSettlementColor,
  getSettlementColor
} from "../../../Redux/modules/board";
import "../../../Css/Board/settlement.css";

const Settlement = ({ index, type, isCity, changeSettlementColor }) => {
  const player = getCurrentPlayer();
  const color = getSettlementColor(index);
  return (
    <div
      className={"crossroad " + type}
      onClick={() => changeSettlementColor(index, player)}
    />
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  changeSettlementColor,
  getSettlementColor,
  getCurrentPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settlement);
