import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardRutaBonus from "../components/CardRutaBonus";
import callApi from "../hooks/callApi";

export default function RutaBonus() {
  const [rutabonusList, setRutaBonusList] = useState([]);
  const [giornata, setGiornata] = useState(0);
  const [count, setCount] = useState(0);
  const [numRutate, setNumRutate] = useState(0);

  useEffect(() => {
    fillRutaBonusList();
  }, [giornata]);

  const fillRutaBonusList = async () => {
    const response = await callApi(`rutabonus`, 'GET');
    const data = await response.json();
    // console.log(data);

    if (response.status == 200) {
      setRutaBonusList(data.body.rutabonus);
    }
    else {
      setRutaBonusList([]);
    }
    // console.log(rutabonusList);
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
      <h1 className="h1 text-white">RutaBonus</h1>
      {rutabonusList.length > 0 ? rutabonusList.map((rutabonus, index) => (
        <CardRutaBonus
          key={rutabonus.Id}
          title={rutabonus.Title}
          description={rutabonus.Description}
          hint={rutabonus.Hint}
          ps={rutabonus.PS}
          image={rutabonus.Image}
          isActive={rutabonus.IsActive}
        />
      )) :
        <p className="text-white text-center">Nessun RutaBonus trovato...</p>}
    </>
  );
}
