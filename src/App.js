import "./App.css";
import {Routes, Route} from "react-router-dom"
import {Link} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      {
        // Code here
       <Home/>
      
      }
      <Routes>
        <Route path="" element={<logo/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
