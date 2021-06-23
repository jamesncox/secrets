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
  const [name, setName] = useLocalStorage("name");

  return (
    <div className="App">
      <Header />
      {id ? null : <RoomPortal setId={(id, setId)} />}
      {id && !name && <NamePortal setName={setName} id={id} />}
      {id && name && (
        <ChatPortal id={id} setId={setId} name={name} setName={setName} />
      )}
      <SmallDotGrid />
      <LargeDotGrid />
    </div>
  );
}

export default App;
