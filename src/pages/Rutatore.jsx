import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardRutazione from "../components/Cards/CardRutazione";
import { GIORNATA, MAX_RUTAS } from "../utilities/Constants";
import callApi from "../hooks/callApi";
import Loading from "../components/Loading";
import ErrorModal from "../components/ErrorModal";

export default function Rutatore() {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [rutazioniList, setRutazioniList] = useState([]);
    const [isActiveList, setIsActiveList] = useState([]);
    const [rutas, setRutas] = useState(0);

    useEffect(() => {
        fillRutazioniList();
    }, []);

    const fillRutazioniList = async () => {
        setIsLoading(true);
        const response = await callApi(`rutazioni/${GIORNATA}`, 'GET');
        const data = await response.json();
        // console.log(data);

        if (response.status == 200) {
            setRutazioniList(data.body.rutazioni);
            if (isActiveList.length == 0)
                setIsActiveList(Array(data.body.rutazioni.length).fill(false));
        }
        else {
            setRutazioniList([]);
            setIsActiveList([]);
        }
        setIsLoading(false);
        // console.log(rutazioniList);
    }

    const onClickCardRutazione = (index) => {
        const newActiveList = isActiveList.map((v, i) => {
            return i === index ? !v : v;
        });

        let newRutas = rutazioniList[index].Rutas;
        if (!newActiveList[index])
            newRutas = -newRutas;
        const totalRutas = rutas + newRutas;
        if (totalRutas >= 0 && totalRutas <= MAX_RUTAS) {
            setRutas(rutas + newRutas);
            setIsActiveList(newActiveList);
        }
        else
            setHasError(true);
    }

    const onSaveFormazione = () => {
        console.log('SAVE Clicked');
        let rutazioniSelected = [];
        isActiveList.map((v, i) => {
            if (v)
                rutazioniSelected.push(rutazioniList[i].Id);
        });
        console.log(rutazioniSelected);
    }

    return (
        <>
            <Loading visible={isLoading} />
            <ErrorModal 
                visible={hasError} 
                onClose={() => setHasError(false)} 
                title={'Attenzione!'}
                description={`Non puoi superare il limite di ${MAX_RUTAS} Rutas`}
            />
            <h1 className="h1 text-white">Rutatore</h1>
            <h2 className="h3 text-center text-white mb-4">Giornata {GIORNATA}</h2>
            <div className="w-20 h-12 fixed top-16 right-0 rounded-b-full bg-ruta_blue text-white flex items-center justify-center z-50 shadow-md">
                <p><span>{rutas}</span> / <span className="font-semibold">{MAX_RUTAS}</span></p>
            </div>
            <button onClick={onSaveFormazione} className={`${rutas <= 0 ? 'hidden' : ''} px-6 py-2 fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-ruta_yellow-dark active:bg-ruta_yellow font-semibold text-lg flex items-center justify-center z-50 shadow-md`}>
                Salva
            </button>
            {rutazioniList.length > 0 ? rutazioniList.map((rutazioni, index) => (
                <CardRutazione
                    key={rutazioni.Id}
                    num={rutazioni.Num}
                    title={rutazioni.Title}
                    description={rutazioni.Description}
                    rutas={rutazioni.Rutas}
                    monteruta={rutazioni.MonteRuta}
                    malus={rutazioni.Malus}
                    malusText={rutazioni.MalusText}
                    bonus={rutazioni.Bonus}
                    bonusText={rutazioni.BonusText}
                    isRutata={rutazioni.IsRutata}
                    isActive={isActiveList[index]}
                    onClick={() => onClickCardRutazione(index)}
                />
            )) :
                <p className="text-white text-center">Nessuna Rutazione trovata per la Giornata selezionata...</p>
            }
            {/* <div className="card">
                <p>Questa sezione è ancora in fase di sviluppo</p>
                <p>L'idea è quella di mostrare le Rutazioni scelte della settimana, e lo storico di tutte le Rutazioni scelte in passato</p>
                <p>Se hai dei suggerimenti scrivici!</p>
            </div> */}
        </>
    );
}