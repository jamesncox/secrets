import { useState } from "react";

import "./stylesheets/App.css";
import "./stylesheets/Responsive.css";
import Header from "./components/Header";
import RoomPortal from "./components/RoomPortal";
import ChatPortal from "./components/ChatPortal";
import NamePortal from "./components/NamePortal";
import LargeDotGrid from "./components/LargeDotGrid";
import SmallDotGrid from "./components/SmallDotGrid";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id");
  const [name, setName] = useState("");
  return (
    <div className="App">
      <Header />
      {id ? null : <RoomPortal onIdSubmit={(id, setId)} />}
      {id && name === "" ? <NamePortal setName={setName} id={id} /> : null}
      {id && name !== "" ? <ChatPortal id={id} /> : null}
      <SmallDotGrid />
      <LargeDotGrid />
    </div>
  );
}

export default App;
