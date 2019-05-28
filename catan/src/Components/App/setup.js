import React from "react";
import "../../Css/setup.css";

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
      choosingNumber: true,
      players: []
    };
  }
  handleInput = () => {
    let number = document.getElementById("numberInput").value;
    if (number != null) {
      this.setState({
        number
      });
      alert(this.state.number);
      if (this.state.number > 2 && this.state.number < 7) {
        this.setState({
          choosingNumber: false
        });
        alert("Yes");
      }
    }
  };

  render() {
    const choosingNumber = this.state.choosingNumber;
    return (
      <>
        {choosingNumber ? (
          <div className="form">
            <h2>
              Choose the number of people that will play the game ( between 3
              and 6)
            </h2>
            <input
              id="numberInput"
              type="number"
              placeholder="number of players..."
            />
            <button onClick={this.handleInput}>Enter</button>
          </div>
        ) : (
          <div>
            <p>Works</p>
          </div>
        )}
      </>
    );
  }
}

export default Setup;
