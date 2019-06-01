import React from "react";
import "../../../Css/Board/road.css";

const Road = ({ index, color, type }) => {
  return <div className={"road " + type} />;
};

export default Road;
