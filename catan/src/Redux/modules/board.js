import shuffle from "../../utils/shuffles";
import { roadPlaced, settlementPlaced } from "./player";

const CHANGE_ROAD_COLOR = "CHANGE_ROAD_COLOR";
const CHANGE_SETTLEMENT_COLOR = "CHANGE_SETTLEMENT_COLOR";

//SETTING UP INITIAL STATE AND THE START OF THE GAME
const numbers = shuffle([
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  6,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  12
]);
const types = shuffle([
  "brick",
  "brick",
  "brick",
  "ore",
  "ore",
  "ore",
  "wool",
  "wool",
  "wool",
  "wool",
  "grain",
  "grain",
  "grain",
  "grain",
  "lumber",
  "lumber",
  "lumber",
  "lumber",
  "nothing"
]);

const initialState = {
  hexes: [],
  settlements: [],
  roads: []
};

function setNumber(type, i) {
  if (type === "nothing") {
    return 7;
  }
  return numbers[i];
}

function setColor(type) {
  switch (type) {
    case "lumber":
      return "brown";
    case "brick":
      return "red";
    case "ore":
      return "gray";
    case "wool":
      return "white";
    case "grain":
      return "yellow";
    default:
      return "black";
  }
}

const as = [3, 4, 5, 4, 3]; //Number of hexes in the row
const bs = [0, 7, 16, 28, 39]; //Index of first settlement in the row
const cs = [[3, 3, 4], [4, 4, 5], [5, 5, 5], [5, 4, 4], [4, 3, 3]]; //How much certain indexes move
const settlementHexIndexes = [];

//A very bad algorithm made by me so it's at least partially not hardcoded even though it is
function settlementAlgorithm() {
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < as[i]; j++) {
      const arrays = [];
      arrays.push(bs[i] + j);
      arrays.push(bs[i] + j + cs[i][0]);
      arrays.push(bs[i] + j + cs[i][0] + 1);
      arrays.push(bs[i] + j + cs[i][0] + cs[i][1] + 1);
      arrays.push(bs[i] + j + cs[i][0] + cs[i][1] + 2);
      arrays.push(bs[i] + j + cs[i][0] + cs[i][1] + cs[i][2] + 2);
      settlementHexIndexes.push(arrays);
    }
  }
}

const ar = [3, 4, 5, 4, 3];
const br = [0, 10, 23, 40, 54];
const cr = [[5, 4], [7, 5], [9, 5], [7, 4], [6, 3]];
const roadsHexIndexes = [];

function roadsAlgorithm() {
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < ar[i]; j++) {
      const arrayr = [];
      arrayr.push(br[i] + j * 2);
      arrayr.push(br[i] + j * 2 + 1);
      arrayr.push(br[i] + j + cr[i][0] + 1);
      arrayr.push(br[i] + j + cr[i][0] + 2);
      arrayr.push(br[i] + j * 2 + cr[i][0] + cr[i][1] + 2);
      arrayr.push(br[i] + j * 2 + cr[i][0] + cr[i][1] + 3);
      roadsHexIndexes.push(arrayr);
    }
  }
}

(() => {
  settlementAlgorithm();
  roadsAlgorithm();
  for (var i = 0; i < 19; i++) {
    initialState.hexes.push({
      index: i,
      color: setColor(types[i]),
      number: setNumber(types[i], i),
      type: types[i],
      neighbouringSettlements: settlementHexIndexes[i],
      neighbouringRoads: roadsHexIndexes[i]
    });
  }
  for (var j = 0; j < 54; j++) {
    initialState.settlements.push({ index: j, color: "black", isCity: false });
  }
  for (var k = 0; k < 71; k++) {
    initialState.roads.push({ index: k, color: "black" });
  }
})();

export const changeRoadColor = (number, player, currentColor) => dispatch => {
  dispatch({
    type: CHANGE_ROAD_COLOR,
    payload: { number, player, currentColor }
  });
  dispatch(roadPlaced(player));
};

export const changeSettlementColor = (
  number,
  player,
  currentColor
) => dispatch => {
  dispatch({
    type: CHANGE_SETTLEMENT_COLOR,
    payload: { number, player, currentColor }
  });
  dispatch(settlementPlaced(player));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROAD_COLOR:
      let roads = [...state.roads];
      const newRoad = {
        ...roads[action.payload.number],
        color: action.payload.player.color
      };
      roads[action.payload.number] = newRoad;
      return {
        ...state,
        roads
      };
    case CHANGE_SETTLEMENT_COLOR:
      let settlements = [...state.settlements];
      const newSettlement = {
        ...settlements[action.payload.number],
        color: action.payload.player.color
      };
      settlements[action.payload.number] = newSettlement;
      return {
        ...state,
        settlements
      };
    default:
      return state;
  }
};

export default reducer;
