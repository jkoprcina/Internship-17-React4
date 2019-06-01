import React from "react";
import Hex from "./hex";
import "../../../Css/Board/board.css";

const Board = ({ hexes }) => {
  return (
    <div className="gameboard">
      <div className="field-row">
        {hexes.map((hex, index) => {
          if (index < 3) {
            <Hex
              index={hex.indexes[index]}
              number={hex.numbers[index]}
              color={hex.color[index]}
            />;
          }
        })}
      </div>
      <div className="field-row">
        {hexes.map((hex, index) => {
          if (index > 2 && index < 7) {
            <Hex
              index={hex.indexes[index]}
              number={hex.numbers[index]}
              color={hex.color[index]}
            />;
          }
        })}
      </div>
      <div className="field-row">
        {hexes.map((hex, index) => {
          if (index > 6 && index < 12) {
            <Hex
              index={hex.indexes[index]}
              number={hex.numbers[index]}
              color={hex.color[index]}
            />;
          }
        })}
      </div>
      <div className="field-row">
        {hexes.map((hex, index) => {
          if (index > 11 && index < 16) {
            <Hex
              index={hex.indexes[index]}
              number={hex.numbers[index]}
              color={hex.color[index]}
            />;
          }
        })}
      </div>
      <div className="field-row">
        {hexes.map((hex, index) => {
          if (index > 15) {
            <Hex
              index={hex.indexes[index]}
              number={hex.numbers[index]}
              color={hex.color[index]}
            />;
          }
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  hexes: state.board.hexes
});

const mapDispatchToProps = {
  loadHexes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
