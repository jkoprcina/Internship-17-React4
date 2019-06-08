import React from "react";
import { connect } from "react-redux";
import { removeResources } from "../../../Redux/modules/player";
import {
  changeSettlementColor,
  changeSettlementType
} from "../../../Redux/modules/board";
import store from "../../../Redux/store";
import { COSTS } from "../../../utils/checkResources";
import "../../../Css/Board/settlement.css";

class Settlement extends React.Component {
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
  handleChangeSettlementColorClick = (index, player, color) => {
    if (this.props.turn < 9) {
      if (color === "black" && player.leftToPlace.settlement !== 0) {
        this.props.changeSettlementColor(index, player, color);
      }
    } else {
      if (!this.props.settlements[index].isCity && color === player.color) {
        if (
          player.resources.grain >= COSTS.city.grain &&
          player.resources.ore >= COSTS.city.ore
        ) {
          this.props.removeResources(player, "city");
          this.props.changeSettlementType(this.props.settlements[index]);
        }
      } else {
        if (
          player.resources.brick >= COSTS.settlement.brick &&
          player.resources.lumber >= COSTS.settlement.lumber &&
          player.resources.grain >= COSTS.settlement.grain &&
          player.resources.wool >= COSTS.settlement.wool
        ) {
          this.props.removeResources(player, "settlement");
          this.props.changeSettlementColor(index, player, color);
        }
      }
    }
  };
  render() {
    return (
      <div
        className={
          "crossroad " +
          this.props.type +
          " " +
          this.props.settlements[this.props.index].color +
          " " +
          (this.props.isCity ? "square" : "circle")
        }
        onClick={() =>
          this.handleChangeSettlementColorClick(
            this.props.index,
            this.props.player,
            this.props.settlements[this.props.index].color
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  player: state.players.players[0],
  settlements: state.board.settlements,
  turn: state.players.turn
});

const mapDispatchToProps = {
  changeSettlementColor,
  removeResources,
  changeSettlementType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settlement);
