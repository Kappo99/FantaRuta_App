import { Routes, Route } from "react-router-dom";
import Rutazioni from "../pages/Rutazioni";
import Rutasslifica from "../pages/Rutasslifica";
import Rutatore from "../pages/Rutatore";
import RutaBonus from "../pages/RutaBonus";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Rutazioni />} />
      <Route path="/rutabonus" element={<RutaBonus />} />
      <Route path="/rutasslifica" element={<Rutasslifica />} />
      <Route path="/rutatore" element={<Rutatore />} />
    </Routes>
  );
}
