
import { Registro } from "./components/Registro/Registro";

export function App() {
  return <Registro />;
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registro } from "./components/Registro/Registro";
import { home } from "./components/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/home" element={<home />} />
      </Routes>
    </BrowserRouter>
  );
}

