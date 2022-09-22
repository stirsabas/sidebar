import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home";
import Agregar from "./pages/Agregar";
import Resumen from "./pages/Resumen";
import Inventario from "./pages/Inventario";
import Archivos from "./pages/Archivos";
import Help from "./pages/Help";
import Inbox from "./pages/Inbox";
import Configuracion from "./pages/Configuracion";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="agregar" element={<Agregar />} />
          <Route path="resumen" element={<Resumen />} />
          <Route path="inventario" element={<Inventario />} />
          <Route path="archivos" element={<Archivos />} />
          <Route path="help" element={<Help />} />
          <Route path="configuracion" element={<Configuracion />} />
          <Route path="inbox" element={<Inbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
