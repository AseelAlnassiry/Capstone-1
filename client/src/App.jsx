import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Saved from "./pages/Saved";
import Profile from "./pages/Profile";
import Yu from './pages/Yu'

function App() {
  return (
    <BrowserRouter>
      <div className="w-scren flex h-screen flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:id" element={<Anime />} />
          <Route path="/yuchan" element={<Yu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
