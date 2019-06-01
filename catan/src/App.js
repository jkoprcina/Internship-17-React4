import React from "react";
import Game from "./Components/Game/game";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Game />
      </Provider>
    </div>
  );
}

export default App;
