import React from "react";
import Road from "./road";
import Number from "./number";
import Settlement from "./settlement";
import "../../../Css/Board/hex.css";

const Hex = ({ index, number, color }) => {
  return (
    <div className="hex">
      <Number value={number} />
      <Settlement type="crossroad-top" />
      <Settlement type="crossroad-top-right" />
      <Settlement type="crossroad-top-left" />
      <Road type="road-top-left" />
      <Road type="road-top-right" />
      <div className="hex-top" />
      <div className="hex-middle" />
      <Road type="road-left" />
      <Road type="road-right" />
      <Settlement type="crossroad-bottom-right" />
      <Settlement type="crossroad-bottom-left" />
      <div className="hex-bottom" />
      <Settlement type="crossroad-bottom" />
      <Road type="road-bottom-left" />
      <Road type="road-bottom-right" />
    </div>
  );
};

export default Hex;
