import React from "react";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import HomeScreen from "./components/tuiter/home-screen";
import ExploreScreen from "./components/tuiter/explore-screen/explorescreen";

import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path='/hello'
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/"
                         exact={true}
                         element={<Labs/>}/>
                  <Route path="/tuiter"
                         exact={true}
                         element={<Tuiter/>}/>
                  <Route path="/tuiter/home"
                         exact={true}
                         element={<HomeScreen/>}/>
                  <Route path="/tuiter/explore"
                         exact={true}
                         element={<ExploreScreen/>}/>

              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
