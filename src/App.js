import "./stylesheets/App.css";
import "./stylesheets/Responsive.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
