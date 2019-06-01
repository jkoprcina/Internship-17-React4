import React from "react";
import Hex from "./hex";
import { connect } from "react-redux";
import {} from "../../../Redux/modules/board";
import "../../../Css/Board/board.css";

const Board = ({ hexes }) => {
  return (
    <div className="gameboard">
      <div className="field-row">
        {hexes.slice(0, 3).map((hex, index) => {
          console.log(hex.number);
          return <Hex key={hex.index} number={hex.number} color={hex.color} />;
        })}
      </div>
      <div className="field-row">
        {hexes.slice(3, 7).map((hex, index) => {
          return <Hex key={hex.index} number={hex.number} color={hex.color} />;
        })}
      </div>
      <div className="field-row">
        {hexes.slice(7, 12).map((hex, index) => {
          return <Hex key={hex.index} number={hex.number} color={hex.color} />;
        })}
      </div>
      <div className="field-row">
        {hexes.slice(12, 16).map((hex, index) => {
          return <Hex key={hex.index} number={hex.number} color={hex.color} />;
        })}
      </div>
      <div className="field-row">
        {hexes.slice(16).map((hex, index) => {
          return <Hex key={hex.index} number={hex.number} color={hex.color} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  hexes: state.board.hexes
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
