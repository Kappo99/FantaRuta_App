import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardRutazione from "../components/Cards/CardRutazione";
import { GIORNATA, IS_EDITABLE, MAX_RUTAS } from "../utilities/Constants";
import callApi from "../hooks/callApi";
import Loading from "../components/Loading";
import ErrorModal, { MODAL_TYPES } from "../components/ErrorModal";
import { partialMonteRuta } from "./Formazioni";

export default function Rutatore() {
    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalDescription, setModalDescription] = useState('');
    const [modalType, setModalType] = useState(MODAL_TYPES.WARNING);
    const [rutazioniList, setRutazioniList] = useState([]);
    const [giornata, setGiornata] = useState(GIORNATA);
    const [isActiveList, setIsActiveList] = useState([]);
    const [rutas, setRutas] = useState(0);

    useEffect(() => {
        fillRutazioniList();
    }, [giornata]);

    const fillRutazioniList = async () => {
        setIsLoading(true);
        if (IS_EDITABLE && giornata == GIORNATA) {
            const response = await callApi(`rutazioni/${giornata}`, 'GET');
            const data = await response.json();
            // console.log(data);

            if (response.status == 200) {
                setRutazioniList(data.body.rutazioni);
                // if (isActiveList.length == 0)
                const localActiveList = JSON.parse(localStorage.getItem('isActiveList'));
                setIsActiveList(localActiveList ?? Array(data.body.rutazioni.length).fill(false));
                let rutas = 0;
                for (let i = 0; i < localActiveList.length; i++) {
                    if (localActiveList[i]) {
                        rutas += data.body.rutazioni[i].Rutas;
                    }
                }
                setRutas(rutas);
            }
            else {
                setRutazioniList([]);
                setIsActiveList([]);
            }
        }
        else {
            const response = await callApi(`formazioni/${giornata}`, 'GET');
            const data = await response.json();
            // console.log(data);

            if (response.status == 200) {
                Object.values(data.body.formazioni).map((f, i) => {
                    if (f.rutatore.Id == 13)
                        setRutazioniList(f.rutazioni);
                });
            }
            else {
                setRutazioniList([]);
            }
            setIsActiveList([]);
        }
        setIsLoading(false);
        // console.log(rutazioniList);
    }

    const prevGiornata = () => {
        if (giornata > 1)
            setGiornata(giornata - 1);
    }
    const nextGiornata = () => {
        if (giornata < GIORNATA)
            setGiornata(giornata + 1);
    }

    const onClickCardRutazione = (index) => {
        if (IS_EDITABLE && giornata == GIORNATA) {
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
                localStorage.setItem('isActiveList', JSON.stringify(newActiveList));
            }
            else {
                setModalType(MODAL_TYPES.WARNING);
                setModalDescription(`Non puoi superare il limite di ${MAX_RUTAS} Rutas`);
                setModalVisible(true);
            }
        }
        else {
            setModalType(MODAL_TYPES.WARNING);
            setModalDescription('La formazione può essere modificata solo Domenica, per la giornata in corso');
            setModalVisible(true);
        }
    }

    const onSaveFormazione = async () => {
        let rutazioniSelected = [];
        isActiveList.map((v, i) => {
            if (v)
                rutazioniSelected.push(rutazioniList[i].Id);
        });

        // console.log(rutazioniSelected);
        const formData = new FormData();
        formData.append('rutazioni', JSON.stringify(rutazioniSelected));
        const response = await callApi(`formazioni/${giornata}`, 'POST', formData);
        const data = await response.json();
        // console.log(data);

        if (response.status == 200) {
            setModalType(MODAL_TYPES.SUCCESS);
            setModalDescription('Formazione aggiornata con successo');
        }
        else {
            setModalType(MODAL_TYPES.ERROR);
            setModalDescription('Errore aggiornamento Formazione');
        }
        setModalVisible(true);
    }

    return (
        <>
            <Loading visible={isLoading} />
            <ErrorModal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                title={'Attenzione!'}
                description={modalDescription}
                type={modalType}
            />
            <h1 className="h1 text-white">Rutatore</h1>
            <div className="flex items-center justify-between mb-4 text-white">
                {giornata > 1 ? <FaChevronLeft size={24} onClick={prevGiornata} /> : <div className="w-6"></div>}
                <h2 className="h3 text-center !mb-0">Giornata {giornata}</h2>
                {giornata < GIORNATA ? <FaChevronRight size={24} onClick={nextGiornata} /> : <div className="w-6"></div>}
            </div>
            <div className="w-20 h-12 fixed top-16 right-0 rounded-b-full bg-ruta_blue text-white flex items-center justify-center z-30 shadow-md">
                {IS_EDITABLE && giornata == GIORNATA ?
                    <p><span>{rutas}</span> / <span className="font-semibold">{MAX_RUTAS}</span></p> :
                    <p><span className="font-semibold text-xl">{partialMonteRuta(rutazioniList)}</span></p>}
            </div>
            <button onClick={() => IS_EDITABLE && giornata == GIORNATA && onSaveFormazione()} className={`${rutas <= 0 || !IS_EDITABLE ? 'hidden' : ''} px-6 py-2 fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-ruta_yellow-dark active:bg-ruta_yellow font-semibold text-lg flex items-center justify-center z-50 shadow-md`}>
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