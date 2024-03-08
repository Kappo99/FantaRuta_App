import { Routes, Route } from "react-router-dom";
import Rutazioni from "../pages/Rutazioni";
import Rutasslifica from "../pages/Rutasslifica";
import Rutatore from "../pages/Rutatore";
import RutaBonus from "../pages/RutaBonus";
import Regolamento from "../pages/Regolamento";
import Formazioni from "../pages/Formazioni";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Rutazioni />} />
      <Route path="/rutabonus" element={<RutaBonus />} />
      <Route path="/formazioni" element={<Formazioni />} />
      <Route path="/rutasslifica" element={<Rutasslifica />} />
      <Route path="/rutatore" element={<Rutatore />} />
      <Route path="/regolamento" element={<Regolamento />} />
    </Routes>
  );
}
