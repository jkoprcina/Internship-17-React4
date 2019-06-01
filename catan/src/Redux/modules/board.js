import shuffle from "../../utils/shuffles";

const LOAD_HEXES = "LOAD_HEXES";
const numbers = shuffle([
  1,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
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
  settlements: [
    { index: 0, color: "black", isCity: false, neighbours: [] },
    { index: 1, color: "black", isCity: false, neighbours: [] },
    { index: 2, color: "black", isCity: false, neighbours: [] },
    { index: 3, color: "black", isCity: false, neighbours: [] },
    { index: 4, color: "black", isCity: false, neighbours: [] }
  ],
  roads: [
    { index: 0, color: "black", neighbours: [] },
    { index: 1, color: "black", neighbours: [] },
    { index: 2, color: "black", neighbours: [] },
    { index: 3, color: "black", neighbours: [] },
    { index: 4, color: "black", neighbours: [] }
  ]
};

function setNumber(type, i) {
  if (type === "nothing") {
    return null;
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
(() => {
  for (var i = 0; i < 19; i++) {
    initialState.hexes.push({
      index: i,
      color: setColor(types[i]),
      number: setNumber(types[i], i)
    });
  }
})();

export const loadHexes = () => dispatch => {
  dispatch({
    type: LOAD_HEXES
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HEXES:
      return {
        ...state.hexes
      };
    default:
      return state;
  }
};

export default reducer;
