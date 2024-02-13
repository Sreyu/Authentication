import './App.css';
import Home from "./component/Home"
import Login from "./component/Login"
import Signup from "./component/signup"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
