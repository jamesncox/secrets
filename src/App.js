import "./stylesheets/App.css";
import "./stylesheets/Responsive.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import RoomPortal from "./components/RoomPortal";
import LargeDotGrid from "./components/LargeDotGrid";
import SmallDotGrid from "./components/SmallDotGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <RoomPortal />
      <SmallDotGrid />
      <LargeDotGrid />
    </div>
  );
}

export default App;
