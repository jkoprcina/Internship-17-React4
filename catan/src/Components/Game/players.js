import React from "react";
import { connect } from "react-redux";
import store from "../../Redux/store";
import "../../Css/players.css";

class Players extends React.Component {
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
  render() {
    return (
      <div className="players-list">
        {this.props.players.map((player, index) => (
          <div className="player" key={index}>
            {player.color} {player.name}: {player.score}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players.players
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);
