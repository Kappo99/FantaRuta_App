import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardRutazione from "../components/Cards/CardRutazione";
import { GIORNATA } from "../utilities/Constants";
import callApi from "../hooks/callApi";
import Loading from "../components/Loading";
import Modal, { MODAL_TYPES } from "../components/Modal";

export default function Rutazioni() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalDescription, setModalDescription] = useState('');
  const [modalType, setModalType] = useState(MODAL_TYPES.WARNING);
  const [rutazioniList, setRutazioniList] = useState([]);
  const [giornata, setGiornata] = useState(GIORNATA);
  const [count, setCount] = useState(0);
  const [numRutate, setNumRutate] = useState(0);
  const roleRutatore = localStorage.getItem('roleRutatore') ?? 'User';

  useEffect(() => {
    fillRutazioniList();
  }, [giornata]);

  const fillRutazioniList = async () => {
    setIsLoading(true);
    const response = await callApi(`rutazioni/${giornata}`, 'GET');
    const data = await response.json();
    // console.log(data);

    if (response.status == 200) {
      setRutazioniList(data.body.rutazioni);
      setCount(data.body.count);
      setNumRutate(data.body.numRutate);
    }
    else {
      setRutazioniList([]);
      setCount(0);
      setNumRutate(0);
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

  const onClickCardRutazione = async (index) => {
    if (roleRutatore == 'Admin') {
      const idRutazione = rutazioniList[index].Id;
      setIsLoading(true);
      const response = await callApi(`rutazioni/${idRutazione}`, 'PUT');
      const data = await response.json();
      // console.log(data);

      if (response.status == 200) {
        fillRutazioniList();
      }
      else {
        setModalDescription('Errore di aggiornamento dello stato');
        setModalType(MODAL_TYPES.ERROR);
        setModalVisible(true);
      }
      setIsLoading(false);
    }
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
      <h1 className="h1 text-white">Rutazioni</h1>
      <div className="flex items-center justify-between mb-4 text-white">
        {giornata > 1 ? <FaChevronLeft size={24} onClick={prevGiornata} /> : <div className="w-6"></div>}
        <h2 className="h3 text-center !mb-0">Giornata {giornata}</h2>
        {giornata < GIORNATA ? <FaChevronRight size={24} onClick={nextGiornata} /> : <div className="w-6"></div>}
      </div>
      <p className="text-white">Rutazioni avvenute: <span>{numRutate}</span> / <span>{count}</span></p>
      {rutazioniList.length > 0 ? rutazioniList.map((rutazione, index) => (
        <CardRutazione
          key={rutazione.Id}
          num={rutazione.Num}
          title={rutazione.Title}
          description={rutazione.Description}
          rutas={rutazione.Rutas}
          monteruta={rutazione.MonteRuta}
          malus={rutazione.Malus}
          malusText={rutazione.MalusText}
          bonus={rutazione.Bonus}
          bonusText={rutazione.BonusText}
          isRutata={rutazione.IsRutata}
          onClick={() => onClickCardRutazione(index)}
        />
      )) :
        <p className="text-white text-center">Nessuna Rutazione trovata per la Giornata selezionata...</p>
      }
    </>
  );
}
