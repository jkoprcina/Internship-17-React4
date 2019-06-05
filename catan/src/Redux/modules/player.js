import shuffle from "../../utils/shuffles";

const NEXT_PLAYER = "NEXT_PLAYERS";
const ROAD_PLACED = "ROAD_PLACED";
const SETTLEMENT_PLACED = "SETTLEMENT_PLACED";
const ADD_RESOURCES = "ADD_RESOURCES";

const players = shuffle(["red", "blue", "green", "yellow"]);
let newPlayer, newPlayers, newTurn;
const costs = {
  road: { brick: 1, lumber: 1 },
  settlement: { brick: 1, lumber: 1, grain: 1, wool: 1 },
  city: { grain: 2, ore: 3 }
};
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
export const checkResources = (player, type) => {
  switch (type) {
    case "road":
    case "settlement":
    case "city":
  }
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
      newTurn = state.turn++;
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
    default:
      return { ...state };
  }
};

export default reducer;
