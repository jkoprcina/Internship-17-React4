import React from "react";
import Road from "./road";
import Number from "./number";
import Settlement from "./settlement";
import "../../../Css/Board/hex.css";

const Hex = (index, number, color) => {
  return (
    <div className="hex">
      <div className="hex-top" />
      <div className="hex-middle" />
      <div className="hex-bottom" />
      <Number value={number} />
      <Settlement type="crossroad-top" />
      <Settlement type="crossroad-top-right" />
      <Settlement type="crossroad-top-left" />
      <Settlement type="crossroad-bottom-right" />
      <Settlement type="crossroad-bottom-left" />
      <Settlement type="crossroad-bottom" />
      <Settlement type="crossroad-top" />
      <Road type="road-top-left" />
      <Road type="road-top-right" />
      <Road type="road-left" />
      <Road type="road-right" />
      <Road type="road-bottom-left" />
      <Road type="road-bottom-right" />
    </div>
  );
};

export default Hex;
