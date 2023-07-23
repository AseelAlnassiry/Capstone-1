import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Anime from "./pages/Anime";


function App() {
  return (
    <BrowserRouter>
      <div className="w-scren flex h-screen flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Anime />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
