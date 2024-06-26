import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFileExport, FaRegIdBadge, FaRegUser, FaUserSlash } from "react-icons/fa";
import CardRutazione from "../components/Cards/CardRutazione";
import { GIORNATA, IS_EDITABLE, MAX_RUTAS, STATUS } from "../utilities/Constants";
import callApi from "../hooks/callApi";
import Loading from "../components/Loading";
import Modal, { MODAL_TYPES } from "../components/Modal";
import { partialMonteRuta } from "./Formazioni";
import Login from "./Login";

export default function Rutatore() {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalDescription, setModalDescription] = useState('');
    const [modalType, setModalType] = useState(MODAL_TYPES.WARNING);
    const [rutazioniList, setRutazioniList] = useState([]);
    const [bonus_x2, setBonus_x2] = useState(false);
    const [giornata, setGiornata] = useState(GIORNATA);
    const [isActiveList, setIsActiveList] = useState([]);
    const [rutas, setRutas] = useState(0);
    const [rutatore, setRutatore] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token != null)
            setIsLoggedIn(true);
        if (isLoggedIn)
            fillRutazioniList();
    }, [giornata, isLoggedIn]);

    // Funzione per gestire il login
    const handleLogin = async (num, password) => {
        try {
            const formData = new FormData();
            formData.append('num', num);
            formData.append('password', password);

            const response = await callApi(`login`, "POST", formData);
            const data = await response.json();

            localStorage.setItem('token', data.body.token);
            localStorage.setItem('idRutatore', data.body.idRutatore);
            localStorage.setItem('nameRutatore', data.body.nameRutatore);
            localStorage.setItem('roleRutatore', data.body.roleRutatore);
            setRutatore(data.body.nameRutatore);
            setIsLoggedIn(true);
        } catch (error) {
            setModalDescription('Dati di accesso errati');
            setModalType(MODAL_TYPES.ERROR);
            setModalVisible(true);
        }
    };

    // Funzione per gestire il logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('idRutatore');
        localStorage.removeItem('nameRutatore');
        localStorage.removeItem('roleRutatore');
        setIsLoggedIn(false);
    };

    const fillRutazioniList = async () => {
        setIsLoading(true);
        const idRutatore = localStorage.getItem('idRutatore') ?? -1;
        if (IS_EDITABLE && giornata == GIORNATA) {
            const response = await callApi(`rutazioni/${giornata}`, 'GET');
            const data = await response.json();
            // console.log(data);

            if (response.status == 200) {
                setRutazioniList(data.body.rutazioni);
                // if (isActiveList.length == 0)
                const localActiveList = JSON.parse(localStorage.getItem('isActiveList'));
                setIsActiveList(localActiveList ?? Array(data.body.rutazioni.length).fill(STATUS.DESELECTED));
                let rutas = 0;
                if (localActiveList != null) {
                    for (let i = 0; i < localActiveList.length; i++) {
                        if (localActiveList[i]) {
                            rutas += data.body.rutazioni[i].Rutas;
                        }
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

            if (!IS_EDITABLE)
                localStorage.removeItem('isActiveList');
            if (response.status == 200) {
                Object.values(data.body.formazioni).map((f, i) => {
                    if (f.rutatore.Id == idRutatore) {
                        setRutazioniList(f.rutazioni);
                        setBonus_x2(f.bonus_x2);
                    }
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
                return (i === index ? v+1 : v) % 3;
            });

            let newRutas = newActiveList[index] !== STATUS.OVERPOWER ? rutazioniList[index].Rutas : 0;
            if (newActiveList[index] == STATUS.DESELECTED)
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
        let countOP = 0;
        isActiveList.map((v, i) => {
            if (v != STATUS.DESELECTED)
                rutazioniSelected.push(rutazioniList[i].Id);
            if (v == STATUS.OVERPOWER) {
                rutazioniSelected.push(rutazioniList[i].Id);
                countOP++;
            }
        });

        if (countOP != 1) {
            setModalType(MODAL_TYPES.WARNING);
            setModalDescription('Seleziona 1 Rutazione con il Bonus x5 (colore viola)');
            setModalVisible(true);
            return;
        }

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
            <Modal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                title={'Attenzione!'}
                description={modalDescription}
                type={modalType}
            />
            {isLoggedIn ?
                <>
                    <h1 className="h1 text-white">Rutatore</h1>
                    <div className="flex items-center justify-between mb-4 text-white">
                        {giornata > 1 ? <FaChevronLeft size={24} onClick={prevGiornata} /> : <div className="w-6"></div>}
                        <h2 className="h3 text-center !mb-0">Giornata {giornata}</h2>
                        {giornata < GIORNATA ? <FaChevronRight size={24} onClick={nextGiornata} /> : <div className="w-6"></div>}
                    </div>
                    <div className="w-16 h-16 fixed bottom-4 right-4 rounded-full bg-ruta_yellow-dark text-black flex items-center justify-center z-30 shadow-md">
                        <button onClick={handleLogout}><FaUserSlash size={24} /></button>
                    </div>
                    <div className="w-20 h-12 fixed top-16 right-0 rounded-b-full bg-ruta_blue text-white flex items-center justify-center z-30 shadow-md">
                        {IS_EDITABLE && giornata == GIORNATA ?
                            <p><span>{rutas}</span> / <span className="font-semibold">{MAX_RUTAS}</span></p> :
                            <p><span className="font-semibold text-xl">{partialMonteRuta(rutazioniList, bonus_x2)}</span></p>}
                    </div>
                    <button onClick={() => IS_EDITABLE && giornata == GIORNATA && onSaveFormazione()} className={`${rutas <= 0 || !IS_EDITABLE || giornata != GIORNATA ? 'bottom-0 translate-y-64' : ''} px-6 py-2 fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-ruta_yellow-dark active:bg-ruta_yellow font-semibold text-lg flex items-center justify-center z-50 shadow-md transition-all ease-in-out duration-300`}>
                        Salva
                    </button>
                    <div className="card">
                        <h3 className="h4">Visualizzazione</h3>
                        <p>In questa pagina puoi vedere le tue Formazioni di tutte le giornate, e in alto a destra il MonteRuta guadagnato. </p>
                        <p>Un po' come viene fatto nella pagina Formazioni... ma solo per te.</p>
                        <h3 className="h4 mt-8">Creazione</h3>
                        <p>Per creare la tua Formazione apri questa schermata la Domenica, e clicca sulle Rutazioni che vuoi acquistare.</p>
                        <p>Le stesse si coloreranno di giallo, e vedrai in alto a destra i tuoi Rutas utilizzati.</p>
                        <p>Sarà possibile modificare la Formazione infinite volte, fino alle 23.59 di Domenica.</p>
                        <p><b>IMPORTANTE:</b> Non dimenticarti di cliccare sul bottone "Salva" che compare in basso, altrimenti non potrai partecipare alla giornata.</p>
                    </div>
                    <h2 className="h1 mt-10">Rutazioni</h2>
                    <h3 className="h2 text-center">{rutatore}</h3>
                    {rutazioniList.length > 0 ? rutazioniList.map((rutazioni, index) => (
                        <CardRutazione
                            key={rutazioni.Id}
                            id={rutazioni.Id}
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
                </> :
                <Login onLogin={handleLogin} />}
        </>
    );
}