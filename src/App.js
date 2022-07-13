import { BrowserRouter, Routes,  Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import ArtistDetail from "./ArtistList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
          <Route path='/'  element={<Home/>}  />
          <Route path="/create" element={<Create/>} />
          <Route path="/ArtistDetail/:id" element={<ArtistDetail/>} />
          <Route path="*" element={<div>nada aca</div>} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
