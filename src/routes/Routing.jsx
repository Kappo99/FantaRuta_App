import { Routes, Route } from "react-router-dom";
import Rutazioni from "../pages/Rutazioni";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Rutazioni />} />
    </Routes>
  );
}
