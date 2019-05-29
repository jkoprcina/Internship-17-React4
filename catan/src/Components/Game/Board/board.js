import React from "react";
import Hex from "./hex";
import "../../../Css/Board/board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10, 11, 12],
      types: [
        "brick",
        "brick",
        "brick",
        "ore",
        "ore",
        "ore",
        "wool",
        "wool",
        "wool",
        "wool",
        "grain",
        "grain",
        "grain",
        "grain",
        "lumber",
        "lumber",
        "lumber",
        "lumber",
        "nothing"
      ]
    };
  }
  render() {
    return (
      <div className="gameboard">
        <div className="field-row">
          <Hex />
          <Hex />
          <Hex />
        </div>
        <div className="field-row">
          <Hex />
          <Hex />
          <Hex />
          <Hex />
        </div>
        <div className="field-row">
          <Hex />
          <Hex />
          <Hex />
          <Hex />
          <Hex />
        </div>
        <div className="field-row">
          <Hex />
          <Hex />
          <Hex />
          <Hex />
        </div>
        <div className="field-row">
          <Hex />
          <Hex />
          <Hex />
        </div>
      </div>
    );
  }
}

export default Board;
