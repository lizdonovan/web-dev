import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";


import './App.css';

function App() {
  return (
      <div className="container">
          <HelloWorld/>
          <Labs/>
          <Tuiter/>

      </div>

  );
}

export default App;
