import "./stylesheets/App.css";
import "./stylesheets/Responsive.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import RoomPortal from "./components/RoomPortal";
import ChatPortal from "./components/ChatPortal";
import LargeDotGrid from "./components/LargeDotGrid";
import SmallDotGrid from "./components/SmallDotGrid";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id");
  return (
    <div className="App">
      <Header />
      {id ? null : <RoomPortal onIdSubmit={(id, setId)} />}
      {id ? <ChatPortal id={id} /> : null}
      {/* <RoomPortal onIdSubmit={(id, setId)} /> */}
      <SmallDotGrid />
      <LargeDotGrid />
    </div>
  );
}

export default App;
