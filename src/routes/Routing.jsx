import { Routes, Route } from "react-router-dom";
import Rutazioni from "../pages/Rutazioni";
import Rutasslifica from "../pages/Rutasslifica";
import Rutatore from "../pages/Rutatore";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Rutazioni />} />
      <Route path="/rutasslifica" element={<Rutasslifica />} />
      <Route path="/rutatore" element={<Rutatore />} />
    </Routes>
  );
}
