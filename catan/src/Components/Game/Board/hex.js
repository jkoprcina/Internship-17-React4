import React from "react";
import Road from "./road";
import Number from "./number";
import Settlement from "./settlement";
import "../../../Css/Board/hex.css";

class Hex extends React.Component {
  render() {
    return (
      <div className="hex">
        <Number />
        <Road type="road-top-left" />
        <Settlement type="crossroad-top" />
        <Road type="road-top-right" />
        <div className="hex-top" />
        <Road type="road-left" />
        <Settlement type="crossroad-top-right" />
        <Settlement type="crossroad-top-left" />
        <Settlement type="crossroad-bottom-right" />
        <Settlement type="crossroad-bottom-left" />
        <Road type="road-right" />
        <div className="hex-middle" />
        <Road type="road-bottom-left" />
        <Settlement type="crossroad-bottom" />
        <Settlement type="crossroad-top" />
        <Road type="road-bottom-right" />
        <div className="hex-bottom" />
      </div>
    );
  }
}

export default Hex;
