import React from "react";
import Game from "./Components/Game/game";
import InputForm from "./Components/inputForm";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/inputForm"
              render={props => <InputForm {...props} />}
            />
            <Route path="/game" render={props => <Game {...props} />} />
            <Redirect to="/inputForm" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
