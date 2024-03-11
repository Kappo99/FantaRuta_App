import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GIORNATA } from "../utilities/Constants";
import callApi from "../hooks/callApi";
import IndexChanges from "../components/IndexChanges";
import Loading from "../components/Loading";

export default function Rutasslifica() {
	const [isLoading, setIsLoading] = useState(false);
	const [rutasslificaList, setRutasslificaList] = useState([]);
	const [rutasslificaPrevList, setRutasslificaPrevList] = useState([]);
	const [giornata, setGiornata] = useState(GIORNATA - 1); //* Si aggiorna SOLO a fine giornata, prima di iniziare quella nuova

	useEffect(() => {
		fillRutasslificaList();
	}, [giornata]);

	const fillRutasslificaList = async () => {
		setIsLoading(true);
		const response = await callApi(`rutasslifica/${giornata}`, 'GET');
		const data = await response.json();
		// console.log(data);

		if (response.status == 200) {
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
		if (giornata < GIORNATA - 1) //* La giornata in corso sara sempre uguale alla precedente
			setGiornata(giornata + 1);
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
				{giornata < GIORNATA - 1 ? <FaChevronRight size={24} onClick={nextGiornata} /> : <div className="w-6"></div>}
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