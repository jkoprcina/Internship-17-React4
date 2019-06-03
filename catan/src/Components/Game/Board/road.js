import React from "react";
import { connect } from "react-redux";
import { getCurrentPlayer } from "../../../Redux/modules/player";
import { changeRoadColor, getRoadColor } from "../../../Redux/modules/board";
import "../../../Css/Board/road.css";

const Road = ({ index, type, changeRoadColor }) => {
  const player = getCurrentPlayer();
  const color = getRoadColor(index);
  return (
    <div
      className={"road " + type + " " + color}
      onClick={() => changeRoadColor(index, player)}
    />
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  changeRoadColor,
  getRoadColor,
  getCurrentPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Road);
