import React from 'react';
import 'normalize.css';
import './App.css';
import {Router} from "./configs/route";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

const App = () => {

  return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </Provider>
      </>
  );
}

export default App;
