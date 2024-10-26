import Badges from "./pages/Badges";
import Files from "./pages/Files";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/files" element={<Files />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
