import React from "react";
import { connect } from "react-redux";
import store from "../../Redux/store";
import { nextPlayer, addResources } from "../../Redux/modules/player";
import { rollTheDices } from "../../utils/rollTheDice";
import "../../Css/players.css";

class CurrentPlayer extends React.Component {
  updateStateFromStore = () => {
    const currentState = this.props.players;
    if (this.state !== currentState) {
      this.setState(currentState);
    }
    if (
      currentState.players.some(function(player) {
        return player.score >= 10;
      })
    )
      this.props.history.push("/Won");
  };
  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }
  componentWillUnmount() {
    this.unsubscribeStore();
  }
  handleNextPlayerClick = (player, settlements, turn) => {
    this.props.nextPlayer(player);
    if (turn > 8) {
      let result = rollTheDices();
      let arrayWithPossibleDuplicates = [];
      //Get all settlements around the hexes where "result" = their number
      this.props.hexes.forEach((hex, index) => {
        if (result !== 7 && hex.number === result) {
          hex.neighbouringSettlements.forEach((settlement, j) => {
            arrayWithPossibleDuplicates.push({
              index: settlement,
              type: hex.type
            });
          });
        }
      });
      //Sorting the settlements so that we have no duplicates
      let arrayWithoutDuplicates = [...new Set(arrayWithPossibleDuplicates)];
      let settlementsWithOwners = [];
      //Looking for the owners of those settlements, grabing their color for easier input
      arrayWithoutDuplicates.forEach((settlement, index) => {
        if (!(settlements[settlement.index].color === "black")) {
          settlement.color = settlements[settlement.index].color;
          settlementsWithOwners.push(settlement);
        }
      });
      this.props.addResources(settlementsWithOwners);
    }
  };
  render() {
    if (this.props.turn < 9) {
      return (
        <div className="players-list">
          <p>
            Is playing:{" "}
            <b>{this.props.player.color + " " + this.props.player.name} </b>
          </p>
          <p>
            Place {this.props.player.leftToPlace.road} roads and{" "}
            {this.props.player.leftToPlace.settlement} cities
          </p>
          <p>
            Ne radi nikakvo pozicioniranje, i nazalost se ne vidi razlika izmedu
            sela i grada ( iako postoji)
          </p>
          {this.props.player.leftToPlace.road === 0 &&
          this.props.player.leftToPlace.settlement === 0 ? (
            <button
              onClick={() =>
                this.handleNextPlayerClick(
                  this.props.player,
                  this.props.settlements,
                  this.props.turn
                )
              }
            >
              Next
            </button>
          ) : (
            <></>
          )}
        </div>
      );
    } else {
      return (
        <div className="players-list">
          <p>Is playing: {this.props.player.color}</p>
          <p>Score: {this.props.player.score}</p>
          <p>Resources: </p>
          <p className="resources">
            brick: {this.props.player.resources.brick}
          </p>
          <p className="resources">wool: {this.props.player.resources.wool}</p>
          <p className="resources">
            lumber: {this.props.player.resources.lumber}
          </p>
          <p className="resources">ore: {this.props.player.resources.ore}</p>
          <p className="resources">
            grain: {this.props.player.resources.grain}
          </p>
          <button
            onClick={() =>
              this.handleNextPlayerClick(
                this.props.player,
                this.props.settlements,
                this.props.turn
              )
            }
          >
            Next
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  player: state.players.players[0],
  turn: state.players.turn,
  hexes: state.board.hexes,
  settlements: state.board.settlements,
  players: state.players
});

const mapDispatchToProps = {
  nextPlayer,
  addResources
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentPlayer);
