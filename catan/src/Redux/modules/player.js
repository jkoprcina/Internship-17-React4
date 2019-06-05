import shuffle from "../../utils/shuffles";

const LOAD_PLAYERS = "LOAD_PLAYERS";
const NEXT_PLAYER = "NEXT_PLAYERS";
const ROAD_PLACED = "ROAD_PLACED";

const players = ["red", "blue", "green", "yellow"];

const initialState = {
  players: [],
  turn: 1
};

(() => {
  const orderOfPlaying = shuffle(players);
  for (var i = 0; i < 4; i++) {
    initialState.players.push({
      index: i,
      color: orderOfPlaying[i],
      score: 0,
      resources: { brick: 0, ore: 0, wool: 0, grain: 0, lumber: 0 },
      leftToPlace: { settlement: 2, road: 2 }
    });
  }
  initialState.orderOfPlaying = orderOfPlaying;
})();

//METHODS THAT MAKE THE GAME FUNCTION
export const loadPlayers = () => {
  return {
    type: LOAD_PLAYERS
  };
};

export const nextPlayer = () => {
  initialState.turn++;
  return {
    type: NEXT_PLAYER
  };
};

export const roadPlaced = player => {
  return {
    type: ROAD_PLACED,
    payload: player
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PLAYERS:
      return {
        ...state
      };
    case NEXT_PLAYER:
      let newPlayerArray = state.players.slice(1, 4);
      newPlayerArray.push(state.players[0]);
      return {
        ...state,
        players: newPlayerArray
      };
    case ROAD_PLACED:
      let newPlayer = action.payload.player;
      newPlayer.leftToPlace.road--;
      return { ...state.players, player: newPlayer };
    default:
      return { state };
  }
};

export default reducer;
