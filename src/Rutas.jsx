import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listado from "./Listado";
import Listado2 from "./Listado2";
export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="">
          <Route path="/super" element={<Listado2 />} />
          <Route path="/general" element={<Listado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
