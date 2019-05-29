const ADD_PLAYER = "ADD_PLAYER";
const LOAD_PLAYERS = "LOAD_PLAYERS";
const LOAD_PLAYER = "LOAD_PLAYER";

const initialState = {
  players: []
};

export const loadPlayers = () => dispatch => {
  dispatch({
    type: LOAD_PLAYERS
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PLAYERS:
      return {
        ...state
      };
  }
};

export default reducer;
