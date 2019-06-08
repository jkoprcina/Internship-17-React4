import React from "react";
import { connect } from "react-redux";
import store from "../../../Redux/store";
import { removeResources } from "../../../Redux/modules/player";
import { changeRoadColor } from "../../../Redux/modules/board";
import { COSTS } from "../../../utils/checkResources";
import "../../../Css/Board/road.css";

class Road extends React.Component {
  updateStateFromStore = () => {
    const currentState = this.props.players;
    if (this.state !== currentState) {
      this.setState(currentState);
    }
  };
  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }
  componentWillUnmount() {
    this.unsubscribeStore();
  }
  handleChangeRoadColorClick = (index, player, color) => {
    if (this.props.turn < 9) {
      if (color === "black" && player.leftToPlace.road !== 0) {
        this.props.changeRoadColor(index, player, color);
      }
    } else {
      if (
        player.resources.brick >= COSTS.road.brick &&
        player.resources.lumber >= COSTS.road.lumber
      ) {
        this.props.removeResources(this.props.player, "road");
        this.props.changeRoadColor(this.props.index, this.props.player, color);
      }
    }
  };
  render() {
    return (
      <div
        className={
          "road " +
          this.props.type +
          " " +
          this.props.roads[this.props.index].color
        }
        onClick={() =>
          this.handleChangeRoadColorClick(
            this.props.index,
            this.props.player,
            this.props.roads[this.props.index].color
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  player: state.players.players[0],
  roads: state.board.roads,
  turn: state.players.turn
});

const mapDispatchToProps = {
  changeRoadColor,
  removeResources
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Road);
