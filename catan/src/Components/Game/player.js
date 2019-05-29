import React from "react";

const Player = props => {
  return (
    <p>
      Color: {props.name} Score: {props.score}
    </p>
  );
};

export default Player;
