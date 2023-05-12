import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Playlist from "./pages/playlist";
import Login from "./pages/LogReg/register";

import Favorit from "./pages/favorit";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/favorit" element={<Favorit />} />
         <Route path="/playlist" element={<Playlist />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
