import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Board from "./Components/App/Game/Board/board";
import Setup from "./Components/App/setup";
import Game from "./Components/App/Game/game";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/Setup" render={props => <Setup {...props} />} />
            <Route exact path="/Game" render={props => <Game {...props} />} />
          </Switch>
        </BrowserRouter>
      </Provider>
      <Board />
    </div>
  );
}

export default App;
