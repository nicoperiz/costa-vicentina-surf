import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SpotDetail from "./pages/SpotDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spot/:nome" element={<SpotDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;