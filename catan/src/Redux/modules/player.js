import shuffle from "../../utils/shuffles";

const LOAD_PLAYERS = "LOAD_PLAYERS";
const LOAD_PLAYER = "LOAD_PLAYER";
const NEXT_PLAYER = "NEXT_PLAYERS";

const players = ["red", "blue", "green", "yellow"];

const initialState = {
  players: [],
  orderOfPlaying: null,
  currentPlay: 0
};

(() => {
  const orderOfPlaying = shuffle(players);
  for (var i = 0; i < 4; i++) {
    initialState.players.push({
      index: i,
      color: orderOfPlaying[i],
      score: 0,
      resources: { brick: 0, ore: 0, wool: 0, grain: 0, lumber: 0 }
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
  initialState.currentPlay++;
  return {
    type: NEXT_PLAYER
  };
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
      const player = state.players.find(
        player => player.Index === state.currentPlay % 4
      );
      return { ...player };
    default:
      return state;
  }
};

export default reducer;
