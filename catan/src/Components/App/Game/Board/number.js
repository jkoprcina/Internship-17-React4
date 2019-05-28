import React from "react";
import "../../../../Css/Board/number.css";

class Number extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }
  render() {
    return <div className="dice-index" />;
  }
}

export default Number;
