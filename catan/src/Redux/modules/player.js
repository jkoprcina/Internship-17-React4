import shuffle from "../../utils/shuffles";

const LOAD_PLAYERS = "LOAD_PLAYERS";
const LOAD_PLAYER = "LOAD_PLAYERS";

const orderOfPlayingNotState = shuffle[("red", "blue", "green", "yello")];

const initialState = {
  players: [
    {
      color: "red",
      score: 0,
      currentPlayer: false,
      resources: { brick: 0, ore: 0, wool: 0, grain: 0, lumber: 0 }
    },
    {
      color: "blue",
      score: 0,
      currentPlayer: false,
      resources: { brick: 0, ore: 0, wool: 0, grain: 0, lumber: 0 }
    },
    {
      color: "green",
      score: 0,
      currentPlayer: false,
      resources: { brick: 0, ore: 0, wool: 0, grain: 0, lumber: 0 }
    },
    {
      color: "yellow",
      score: 0,
      currentPlayer: false,
      resources: { brick: 0, ore: 0, wool: 0, grain: 0, lumber: 0 }
    }
  ],
  orderOfPlaying: orderOfPlayingNotState,
  turn: 0
};

export const loadPlayers = () => dispatch => {
  dispatch({
    type: LOAD_PLAYERS
  });
};

export const loadPlayer = () => dispatch => {
  dispatch({
    type: LOAD_PLAYER
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PLAYERS:
      return {
        ...state
      };
    case LOAD_PLAYER:
      for (var player in state.players) {
        if (player.currentPlayer) {
          return player, NextPlayer;
        }
      }
    default:
      return state;
  }
};

export default reducer;
