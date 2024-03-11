import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardRutazione from "../components/Cards/CardRutazione";
import { GIORNATA } from "../utilities/Constants";
import callApi from "../hooks/callApi";
import Loading from "../components/Loading";

export default function Rutazioni() {
  const [isLoading, setIsLoading] = useState(false);
  const [rutazioniList, setRutazioniList] = useState([]);
  const [giornata, setGiornata] = useState(GIORNATA);
  const [count, setCount] = useState(0);
  const [numRutate, setNumRutate] = useState(0);

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

  return (
    <>
      <Loading show={isLoading} />
      <h1 className="h1 text-white">Rutazioni</h1>
      <div className="flex items-center justify-between mb-4 text-white">
        {giornata > 1 ? <FaChevronLeft size={24} onClick={prevGiornata} /> : <div className="w-6"></div>}
        <h2 className="h3 text-center !mb-0">Giornata {giornata}</h2>
        {giornata < GIORNATA ? <FaChevronRight size={24} onClick={nextGiornata} /> : <div className="w-6"></div>}
      </div>
      <p className="text-white">Rutazioni avvenute: <span>{numRutate}</span> / <span>{count}</span></p>
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
        />
      )) :
        <p className="text-white text-center">Nessuna Rutazione trovata per la Giornata selezionata...</p>
      }
    </>
  );
}
