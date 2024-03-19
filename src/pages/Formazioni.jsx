import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GIORNATA, IS_EDITABLE } from "../utilities/Constants";
import callApi from "../hooks/callApi";
import Loading from "../components/Loading";

export const partialMonteRuta = (rutazioni) => {
    let monteRuta = 0;
    rutazioni.forEach(rutazione => {
        monteRuta += rutazione.IsRutata ? rutazione.MonteRuta : 0;
        // monteRuta -= !rutazione.IsRutata ? rutazione.Malus : 0; //* NON funziona, non sempre il Malus è complementare al MonteRuta
    });
    return (monteRuta > 0 ? '+' : '') + monteRuta;
}

export default function Formazioni() {
    const [isLoading, setIsLoading] = useState(false);
    const [formazioniList, setFormazioniList] = useState([]);
    const [giornata, setGiornata] = useState(GIORNATA);
    const idRutatore = localStorage.getItem('idRutatore') ?? -1;
    const roleRutatore = localStorage.getItem('roleRutatore') ?? 'User';

    useEffect(() => {
        fillFormazioniList();
    }, [giornata]);

    const fillFormazioniList = async () => {
        setIsLoading(true);
        const response = await callApi(`formazioni/${giornata}`, 'GET');
        const data = await response.json();
        // console.log(data);

        if (response.status == 200) {
            setFormazioniList(Object.values(data.body.formazioni));
        }
        else {
            setFormazioniList([]);
        }
        setIsLoading(false);
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
            <Loading visible={isLoading} />
            <h1 className="h1 text-white">Formazioni</h1>
            <div className="flex items-center justify-between mb-4 text-white">
                {giornata > 1 ? <FaChevronLeft size={24} onClick={prevGiornata} /> : <div className="w-6"></div>}
                <h2 className="h3 text-center !mb-0">Giornata {giornata}</h2>
                {giornata < GIORNATA ? <FaChevronRight size={24} onClick={nextGiornata} /> : <div className="w-6"></div>}
            </div>
            {formazioniList.length > 0 ? formazioniList.map((formazione, index) => (
                <div key={index} className={`card ${IS_EDITABLE && giornata == GIORNATA && (roleRutatore != 'Admin' && idRutatore != formazione.rutatore.Id) ? 'hidden' : ''}`}>
                    <h3 className="h4">#{formazione.rutatore.Num} {formazione.rutatore.Name}</h3>
                    <span className="w-12 h-12 rounded-full bg-yellow-200 absolute top-4 right-4 flex items-center justify-center shadow-lg">
                        {partialMonteRuta(formazione.rutazioni)}
                    </span>
                    {formazione.rutazioni.map((rutazione, index) => (
                        <div key={index} className="flex items-center gap-3 mb-2 pl-1">
                            <span className={`w-4 h-4 rounded-full bg-${rutazione.IsRutata ? 'green' : 'red'}-500`}></span>
                            <p className={`flex-1 !mb-0 ${rutazione.Malus != null ? 'font-bold' : ''} ${rutazione.Bonus != null ? 'underline' : ''}`}>
                                {rutazione.Num}. {rutazione.Title}
                            </p>
                        </div>
                    ))}
                </div>
            )) :
                <p className="text-white text-center">Nessuna Formazione trovata per la Giornata selezionata...</p>
            }
            {IS_EDITABLE && <p className="text-white text-center">Le Formazioni per la Giornata in corso verranno mostrate da Lunedì...</p>}
        </>
    );
}