import React from "react";
import { connect } from "react-redux";
import { enterNames } from "../Redux/modules/player";
import { Link } from "react-router-dom";
import "../Css/inputForm.css";

class InputForm extends React.Component {
  handleInput = () => {
    let name1 = document.getElementById("numberInput1").value;
    let name2 = document.getElementById("numberInput2").value;
    let name3 = document.getElementById("numberInput3").value;
    let name4 = document.getElementById("numberInput4").value;
    let names = [name1, name2, name3, name4];
    this.props.enterNames(names);
  };

  render() {
    return (
      <>
        <div className="form">
          <h2>Write in names if you'd like</h2>
          <input
            id="numberInput1"
            className="input"
            type="text"
            placeholder="Enter player..."
          />
          <br />
          <input
            id="numberInput2"
            className="input"
            type="text"
            placeholder="Enter player..."
          />
          <br />
          <input
            id="numberInput3"
            className="input"
            type="text"
            placeholder="Enter player..."
          />
          <br />
          <input
            id="numberInput4"
            className="input"
            type="text  "
            placeholder="Enter player..."
          />
          <br />
          <Link to={`/game`}>
            <button className="button" onClick={this.handleInput}>
              Enter
            </button>
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  enterNames
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputForm);
