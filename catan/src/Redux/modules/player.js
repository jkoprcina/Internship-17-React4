import shuffle from "../../utils/shuffles";
import { COSTS } from "../../utils/checkResources";

const NEXT_PLAYER = "NEXT_PLAYERS";
const ROAD_PLACED = "ROAD_PLACED";
const SETTLEMENT_PLACED = "SETTLEMENT_PLACED";
const ADD_RESOURCES = "ADD_RESOURCES";
const REMOVE_RESOURCES = "REMOVE_RESOURCES";
const ENTER_NAMES = "ENTER_NAMES";

const playersList = shuffle(["red", "blue", "green", "yellow"]);
let newPlayer, players, turn;

const initialState = {
  players: [],
  turn: 1
};

(() => {
  for (var i = 0; i < 4; i++) {
    initialState.players.push({
      index: i,
      color: playersList[i],
      score: 0,
      resources: { brick: 0, ore: 0, wool: 0, grain: 0, lumber: 0 },
      leftToPlace: { settlement: 2, road: 2 }
    });
  }
})();

//METHODS THAT MAKE THE GAME FUNCTION
export const enterNames = names => {
  return {
    type: ENTER_NAMES,
    payload: names
  };
};
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
    case ENTER_NAMES:
      players = state.players;
      players.forEach((player, index) => {
        player.name = action.payload[index];
      });
      return {
        ...state,
        players
      };
    case NEXT_PLAYER:
      players = state.players.slice(1, 4);
      players.push(state.players[0]);
      turn = state.turn;
      turn = turn + 1;
      if (state.turn < 9) {
        players[3].leftToPlace.road = 2;
        players[3].leftToPlace.settlement = 2;
      }
      return {
        ...state,
        players,
        turn
      };
    case ROAD_PLACED:
      newPlayer = action.payload;
      newPlayer.leftToPlace.road--;
      players = state.players;
      players[0] = newPlayer;
      return {
        ...state,
        players
      };
    case SETTLEMENT_PLACED:
      newPlayer = action.payload;
      newPlayer.leftToPlace.settlement--;
      newPlayer.score++;
      players = state.players;
      players[0] = newPlayer;
      return {
        ...state,
        players
      };
    case ADD_RESOURCES:
      players = state.players;
      action.payload.forEach((settlement, index) => {
        players.forEach((player, j) => {
          if (player.color === settlement.color && settlement.isCity) {
            player.resources[settlement.type] =
              player.resources[settlement.type] + 2;
          }
          if (player.color === settlement.color && !settlement.isCity) {
            player.resources[settlement.type]++;
          }
        });
      });
      return {
        ...state,
        players
      };
    case REMOVE_RESOURCES:
      newPlayer = action.payload.player;
      switch (action.payload.type) {
        case "road":
          newPlayer.resources.brick =
            newPlayer.resources.brick - COSTS.road.brick;
          newPlayer.resources.lumber =
            newPlayer.resources.lumber - COSTS.road.lumber;
          break;
        case "settlement":
          newPlayer.score++;
          newPlayer.resources.brick =
            newPlayer.resources.brick - COSTS.settlement.brick;
          newPlayer.resources.lumber =
            newPlayer.resources.lumber - COSTS.settlement.lumber;
          newPlayer.resources.grain =
            newPlayer.resources.grain - COSTS.settlement.grain;
          newPlayer.resources.wool =
            newPlayer.resources.wool - COSTS.settlement.wool;
          break;
        case "city":
          newPlayer.score++;
          newPlayer.resources.grain =
            newPlayer.resources.grain - COSTS.city.grain;
          newPlayer.resources.ore = newPlayer.resources.ore - COSTS.city.ore;
          break;
        default:
          break;
      }
      players = state.players;
      players[0] = newPlayer;
      return {
        ...state,
        players
      };
    default:
      return { ...state };
  }
};

export default reducer;
