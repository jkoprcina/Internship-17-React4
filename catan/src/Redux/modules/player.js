import shuffle from "../../utils/shuffles";

const LOAD_PLAYERS = "LOAD_PLAYERS";
const NEXT_PLAYER = "NEXT_PLAYERS";

const orderOfPlayingNotState = shuffle[("red", "blue", "green", "yello")];

const initialState = {
  players: [
    {
      color: "red",
      score: 0,
      resources: { brick: 0, ore: 0, wool: 0, grain: 0, lumber: 0 }
    },
    {
      color: "blue",
      score: 0,
      resources: { brick: 0, ore: 0, wool: 0, grain: 0, lumber: 0 }
    },
    {
      color: "green",
      score: 0,
      resources: { brick: 0, ore: 0, wool: 0, grain: 0, lumber: 0 }
    },
    {
      color: "yellow",
      score: 0,
      resources: { brick: 0, ore: 0, wool: 0, grain: 0, lumber: 0 }
    }
  ],
  orderOfPlaying: orderOfPlayingNotState,
  turn: 0
};

export const loadPlayers = () => {
  return {
    type: LOAD_PLAYERS
  };
};

export const nextPlayer = () => {
  return {
    type: NEXT_PLAYER
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PLAYERS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
