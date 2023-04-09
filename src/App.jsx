import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Worldcup from "./pages/worldcup";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-teal-500 min-h-screen column-center">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/worldcup" element={<Worldcup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
