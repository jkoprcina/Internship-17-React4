import React from "react";
import Road from "./road";
import Number from "./number";
import Settlement from "./settlement";
import "../../../Css/Board/hex.css";

const Hex = ({ index, number, color, settlementIndexes, roadIndexes }) => {
  return (
    <div className="hex">
      <div className={"hex-top " + color + "-border-top"} />
      <div className={"hex-middle " + color + "-background"} />
      <div className={"hex-bottom " + color + "-border-bottom"} />
      <Road type="road-top-left" index={roadIndexes[0]} />
      <Road type="road-top-right" index={roadIndexes[1]} />
      <Road type="road-left" index={roadIndexes[2]} />
      <Road type="road-right" index={roadIndexes[3]} />
      <Road type="road-bottom-left" index={roadIndexes[4]} />
      <Road type="road-bottom-right" index={roadIndexes[5]} />
      <Settlement type="crossroad-top" index={settlementIndexes[0]} />
      <Settlement type="crossroad-top-right" index={settlementIndexes[2]} />
      <Settlement type="crossroad-top-left" index={settlementIndexes[1]} />
      <Settlement type="crossroad-bottom-right" index={settlementIndexes[4]} />
      <Settlement type="crossroad-bottom-left" index={settlementIndexes[3]} />
      <Settlement type="crossroad-bottom" index={settlementIndexes[5]} />
      <Number value={number} />
    </div>
  );
};

export default Hex;
