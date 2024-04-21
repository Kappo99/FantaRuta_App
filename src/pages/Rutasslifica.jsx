import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GIORNATA } from "../utilities/Constants";
import callApi from "../hooks/callApi";
import IndexChanges from "../components/IndexChanges";
import Loading from "../components/Loading";
import { partialMonteRuta } from "./Formazioni";

export default function Rutasslifica() {
	const [isLoading, setIsLoading] = useState(false);
	const [rutasslificaList, setRutasslificaList] = useState([]);
	const [rutasslificaPrevList, setRutasslificaPrevList] = useState([]);
	const [giornata, setGiornata] = useState(GIORNATA);

	useEffect(() => {
		fillRutasslificaList();
	}, [giornata]);

	const fillRutasslificaList = async () => {
		setIsLoading(true);
		const response = await callApi(`rutasslifica/${giornata}`, 'GET');
		const data = await response.json();
		// console.log(data);

		if (response.status == 200) {
			if (giornata == GIORNATA) { //* La giornata in corso si aggiorna in modo dinamico tramite le Formazioni
				const formazioni = await getFormazioniList();
				const rutasslifica = data.body.rutasslifica;
				formazioni.map((formazione, index) => {
					rutasslifica.forEach(r => {
						if (formazione.rutatore.Id == r.IdRutatore)
							r.MonteRuta += parseInt(partialMonteRuta(formazione.rutazioni, formazione.bonus_x2));
					});
				});
				sortByMonteRutaDescending(rutasslifica);
				setRutasslificaList(rutasslifica);
			}
			else
				setRutasslificaList(data.body.rutasslifica);
			setRutasslificaPrevList(data.body.rutasslificaPrev);
		}
		else {
			setRutasslificaList([]);
			setRutasslificaPrevList([]);
		}
		setIsLoading(false);
		// console.log(rutasslificaList);
	}

	const prevGiornata = () => {
		if (giornata > 1)
			setGiornata(giornata - 1);
	}
	const nextGiornata = () => {
		if (giornata < GIORNATA)
			setGiornata(giornata + 1);
	}

	const sortByMonteRutaDescending = (array) => {
		array.sort((a, b) => b.MonteRuta - a.MonteRuta);
	  }

	const getFormazioniList = async () => {
        const response = await callApi(`formazioni/${giornata}`, 'GET');
        const data = await response.json();
        // console.log(data);

        if (response.status == 200) {
            return Object.values(data.body.formazioni);
        }
        else {
            return [];
        }
        // console.log(formazioniList);
    }

	const indexByNumRutatore = (list, n) => {
		for (let i = 0; i < list.length; i++) {
			if (list[i].Rutatore.Num == n)
				return i;
		}
		return null;
	}

	return (
		<>
			<Loading visible={isLoading} />
			<h1 className="h1 text-white">Rutasslifica</h1>
			<div className="flex items-center justify-between mb-4 text-white">
				{giornata > 1 ? <FaChevronLeft size={24} onClick={prevGiornata} /> : <div className="w-6"></div>}
				<h2 className="h3 text-center !mb-0">Giornata {giornata}</h2>
				{giornata < GIORNATA ? <FaChevronRight size={24} onClick={nextGiornata} /> : <div className="w-6"></div>}
			</div>
			{/* <h2 className="h3 text-center text-white">Giornata {giornata}</h2> */}
			<table className="classifica">
				<thead>
					<tr>
						<th>#</th>
						<th>Rutatore</th>
						<th>MonteRuta</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{rutasslificaList.length > 0 && rutasslificaList.map((rutasslifica, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>#{rutasslifica.Rutatore.Num} {rutasslifica.Rutatore.Name}</td>
							<td>{rutasslifica.MonteRuta}</td>
							<td>
								<IndexChanges value={rutasslificaPrevList.length > 0 ? indexByNumRutatore(rutasslificaPrevList, rutasslifica.Rutatore.Num) - index : 0} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{rutasslificaList.length == 0 && <p className="text-white text-center">Rutasslifica non disponibile...</p>}
		</>
	);
}