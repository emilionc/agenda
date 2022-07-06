import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import ArtistDetail from "./ArtistDetail";

function App() {
  return (
    <Routes>
      <div className="App">
        <Navbar />
        <div className="content">
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/data/:id">
            <ArtistDetail />
          </Route>
        </div>
      </div>
    </Routes>
  );
}

export default App;
