///Current component se ne rerendera
///Turn se ne povecava
import React from "react";
import { connect } from "react-redux";
import { nextPlayer, addResources } from "../../Redux/modules/player";
import rollTheDices from "../../utils/rollTheDice";
import "../../Css/players.css";

const CurrentPlayer = ({
  nextPlayer,
  player,
  turn,
  hexes,
  settlements,
  addResources
}) => {
  function handleNextPlayerClick(player, turn, settlements) {
    nextPlayer(player);
    let result = rollTheDices();
    let arrayWithPossibleDuplicates = [];
    //Get all settlements around the hex that has the value which the dices dropped on together
    hexes.forEach((hex, index) => {
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
    addResources(settlementsWithOwners);
  }
  if (turn < 9) {
    return (
      <div className="players-list">
        <p>
          Is playing: <b>{player.color}</b>
        </p>
        <p>
          Place {player.leftToPlace.road} roads and{" "}
          {player.leftToPlace.settlement} cities
        </p>
        <p>Your settlement must be placed adjacent to one of your roads</p>
        {player.leftToPlace.road === 0 &&
        player.leftToPlace.settlement === 0 ? (
          <button
            onClick={() => handleNextPlayerClick(player, turn, settlements)}
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
        <p>Is playing: {player.color}</p>
        <p>
          Roled: <b>{}</b>
        </p>
        <p>Score: {player.score}</p>
        <p>Resources: </p>
        <p className="resources">brick: {player.resources.brick}</p>
        <p className="resources">wool: {player.resources.wool}</p>
        <p className="resources">lumber: {player.resources.lumber}</p>
        <p className="resources">ore: {player.resources.ore}</p>
        <p className="resources">grain: {player.resources.grain}</p>
        <button
          onClick={() => handleNextPlayerClick(player, turn, settlements)}
        >
          Next
        </button>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  player: state.players.players[0],
  turn: state.players.turn,
  hexes: state.board.hexes,
  settlements: state.board.settlements
});

const mapDispatchToProps = {
  nextPlayer,
  addResources
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentPlayer);
