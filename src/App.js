import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";

import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path='/hello' element={<HelloWorld/>}/>
                  <Route path="/labs" element={<Labs/>}/>
                  <Route path="/tuiter" element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
