import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import MenuAppBar from "./components/MenuAppBar/MenuAppBar";

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Login />
    </div>
  );
}

export default App;
