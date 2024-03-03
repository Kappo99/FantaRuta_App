import Classifica from "../components/Classifica";
import { GIORNATA } from "../layout/Layout";

export default function Rutasslifica() {
    return (
        <>
            <h1 className="h1 text-white">Rutasslifica</h1>
            <h2 className="h3 text-center text-white">Giornata {GIORNATA}</h2>
            <Classifica />
        </>
    );
}