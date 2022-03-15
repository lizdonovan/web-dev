import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/hello-world";

import './App.css';

function App() {
  return (
      <div className="container">
          <HelloWorld/>
      </div>

  );
}

export default App;
