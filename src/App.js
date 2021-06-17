import "./stylesheets/App.css";
import "./stylesheets/Responsive.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import RoomPortal from "./components/RoomPortal";

function App() {
  return (
    <div className="App">
      <Header />
      <RoomPortal />
    </div>
  );
}

export default App;
