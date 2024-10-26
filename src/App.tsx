import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Badges from "./pages/Badges";
import Files from "./pages/Files";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/files" element={<Files />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
