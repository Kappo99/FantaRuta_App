import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardRutazione from "../components/CardRutazione";
import { GIORNATA } from "../utilities/Constants";
import callApi from "../hooks/callApi";

export default function Formazioni() {
    const [formazioniList, setFormazioniList] = useState([]);
    const [giornata, setGiornata] = useState(GIORNATA);

    useEffect(() => {
        fillFormazioniList();
    }, [giornata]);

    const fillFormazioniList = async () => {
        const response = await callApi(`formazioni/${giornata}`, 'GET');
        const data = await response.json();
        // console.log(data);

        if (response.status == 200) {
            setFormazioniList(Object.values(data.body.formazioni));
        }
        else {
            setFormazioniList([]);
        }
        // console.log(formazioniList);
    }

    const prevGiornata = () => {
        if (giornata > 1)
            setGiornata(giornata - 1);
    }
    const nextGiornata = () => {
        if (giornata < GIORNATA)
            setGiornata(giornata + 1);
    }

    return (
        <>
            <h1 className="h1 text-white">Formazioni</h1>
            <div className="flex items-center justify-between mb-4 text-white">
                {giornata > 1 ? <FaChevronLeft size={24} onClick={prevGiornata} /> : <div className="w-6"></div>}
                <h2 className="h3 text-center !mb-0">Giornata {giornata}</h2>
                {giornata < GIORNATA ? <FaChevronRight size={24} onClick={nextGiornata} /> : <div className="w-6"></div>}
            </div>
            {formazioniList.length > 0 ? formazioniList.map((formazioni, index) => (
                <div key={index} className="card">
                    <h3 className="h4">#{formazioni.rutatore.Num} {formazioni.rutatore.Name}</h3>
                    {formazioni.rutazioni.map((rutazione, index) => (
                        <p key={index} className="pl-3">{rutazione.Num}. {rutazione.Title}</p>
                    ))}
                </div>
            )) :
                <p className="text-white text-center">Nessuna Formazione trovata per la Giornata selezionata...</p>
            }
        </>
    );
}