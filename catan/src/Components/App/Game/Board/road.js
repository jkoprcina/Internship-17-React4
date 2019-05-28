import React from "react";
import "../../../../Css/Board/road.css";

class Road extends React.Component {
  render() {
    return <div className={"road " + this.props.type} />;
  }
}

export default Road;
