import { useEffect, useState } from "react";
import CardRutaBonus from "../components/Cards/CardRutaBonus";
import callApi from "../hooks/callApi";
import Loading from "../components/Loading";

export default function RutaBonus() {
  const [isLoading, setIsLoading] = useState(false);
  const [rutabonusList, setRutaBonusList] = useState([]);
  const [giornata, setGiornata] = useState(0);

  useEffect(() => {
    fillRutaBonusList();
  }, [giornata]);

  const fillRutaBonusList = async () => {
    setIsLoading(true);
    const response = await callApi(`rutabonus`, 'GET');
    const data = await response.json();
    // console.log(data);

    if (response.status == 200) {
      setRutaBonusList(data.body.rutabonus);
    }
    else {
      setRutaBonusList([]);
    }
    setIsLoading(false);
    // console.log(rutabonusList);
  }

  return (
    <>
      <Loading visible={isLoading} />
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
