import shuffle from "../../utils/shuffles";
import { COSTS } from "../../utils/checkResources";

const NEXT_PLAYER = "NEXT_PLAYERS";
const ROAD_PLACED = "ROAD_PLACED";
const SETTLEMENT_PLACED = "SETTLEMENT_PLACED";
const ADD_RESOURCES = "ADD_RESOURCES";
const REMOVE_RESOURCES = "REMOVE_RESOURCES";

const players = shuffle(["red", "blue", "green", "yellow"]);
let newPlayer, newPlayers, newTurn;

const initialState = {
  players: [],
  turn: 1
};

(() => {
  for (var i = 0; i < 4; i++) {
    initialState.players.push({
      index: i,
      color: players[i],
      score: 0,
      resources: { brick: 0, ore: 0, wool: 0, grain: 0, lumber: 0 },
      leftToPlace: { settlement: 2, road: 2 }
    });
  }
})();

//METHODS THAT MAKE THE GAME FUNCTION
export const removeResources = (player, type) => {
  return {
    type: REMOVE_RESOURCES,
    payload: { player, type }
  };
};

export const nextPlayer = player => {
  return {
    type: NEXT_PLAYER,
    payload: player
  };
};

export const roadPlaced = player => {
  return {
    type: ROAD_PLACED,
    payload: player
  };
};

export const settlementPlaced = player => {
  return {
    type: SETTLEMENT_PLACED,
    payload: player
  };
};

export const addResources = settlements => {
  return {
    type: ADD_RESOURCES,
    payload: settlements
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PLAYER:
      newPlayers = state.players.slice(1, 4);
      newPlayers.push(state.players[0]);
      newTurn = state.turn;
      newTurn = newTurn + 1;
      if (state.turn < 9) {
        newPlayers[3].leftToPlace.road = 2;
        newPlayers[3].leftToPlace.settlement = 2;
      }
      return {
        ...state,
        players: newPlayers,
        turn: newTurn
      };
    case ROAD_PLACED:
      newPlayer = action.payload;
      newPlayer.leftToPlace.road--;
      newPlayers = state.players;
      newPlayers[0] = newPlayer;
      return {
        ...state,
        players: newPlayers
      };
    case SETTLEMENT_PLACED:
      newPlayer = action.payload;
      newPlayer.leftToPlace.settlement--;
      newPlayers = state.players;
      newPlayers[0] = newPlayer;
      return {
        ...state,
        players: newPlayers
      };
    case ADD_RESOURCES:
      newPlayers = state.players;
      action.payload.forEach((settlement, index) => {
        newPlayers.forEach((player, j) => {
          if (player.color === settlement.color) {
            player.resources[settlement.type]++;
          }
        });
      });
      return {
        ...state,
        players: newPlayers
      };
    case REMOVE_RESOURCES:
      let player = action.payload.player;
      switch (action.payload.type) {
        case "road":
          player.resources.brick = player.resources.brick - COSTS.road.brick;
          player.resources.lumber = player.resources.lumber - COSTS.road.lumber;
          break;
        case "settlement":
          player.resources.brick = player.resources.brick - COSTS.road.brick;
          player.resources.lumber = player.resources.lumber - COSTS.road.lumber;
          player.resources.grain = player.resources.grain - COSTS.road.grain;
          player.resources.wool = player.resources.wool - COSTS.road.wool;
          break;
        case "city":
          player.resources.grain = player.resources.grain - COSTS.road.grain;
          player.resources.ore = player.resources.ore - COSTS.road.ore;
          break;
        default:
          break;
      }
      newPlayers = state.players;
      newPlayers[0] = action.payload.player;
      return {
        ...state,
        newPlayers
      };
    default:
      return { ...state };
  }
};

export default reducer;
