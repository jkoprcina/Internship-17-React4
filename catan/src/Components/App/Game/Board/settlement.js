import React from "react";
import "../../../../Css/Board/settlement.css";

class Settlement extends React.Component {
  render() {
    return <div className={"crossroad " + this.props.type} />;
  }
}

export default Settlement;
