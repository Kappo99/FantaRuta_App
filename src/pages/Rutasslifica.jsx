import { useEffect, useState } from "react";
import { GIORNATA } from "../utilities/Constants";
import callApi from "../hooks/callApi";
import IndexChanges from "../components/IndexChanges";

export default function Rutasslifica() {
	const [rutasslificaList, setRutasslificaList] = useState([]);
	const [rutasslificaPrevList, setRutasslificaPrevList] = useState([]);

	useEffect(() => {
		fillRutasslificaList();
	}, []);

	const fillRutasslificaList = async () => {
		const response = await callApi(`rutasslifica/${GIORNATA - 1}`, 'GET');
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
		// console.log(rutasslificaList);
	}

	const indexByNumRutatore = (list, n) => {
		for (let i = 0; i < list.length; i++) {
			if (list[i].Rutatore.Num == n)
				return i;
		}
		return 0;
	}

	return (
		<>
			<h1 className="h1 text-white">Rutasslifica</h1>
			<h2 className="h3 text-center text-white">Giornata {GIORNATA - 1}</h2>
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
								<IndexChanges value={indexByNumRutatore(rutasslificaPrevList, rutasslifica.Rutatore.Num) - index} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{rutasslificaList.length == 0 && <p className="text-white text-center">Rutasslifica non disponibile...</p>}
		</>
	);
}