import { useEffect, useState } from "react";
import { GIORNATA } from "../utilities/Constants";
import callApi from "../hooks/callApi";

export default function Rutasslifica() {
	const [rutasslificaList, setRutasslificaList] = useState([]);

	useEffect(() => {
		fillRutasslificaList();
	}, []);

	const fillRutasslificaList = async () => {
		const response = await callApi(`rutasslifica`, 'GET');
		const data = await response.json();
		// console.log(data);

		if (response.status == 200) {
			setRutasslificaList(data.body.rutasslifica);
		}
		else {
			setRutasslificaList([]);
		}
		console.log(rutasslificaList);
	}

	return (
		<>
			<h1 className="h1 text-white">Rutasslifica</h1>
			<h2 className="h3 text-center text-white">Giornata {GIORNATA}</h2>
			<table className="classifica">
				<thead>
					<tr>
						<th>#</th>
						<th>Rutatore</th>
						<th>MonteRuta</th>
					</tr>
				</thead>
				<tbody>
					{rutasslificaList.length > 0 && rutasslificaList.map((rutasslifica, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>#{rutasslifica.Rutatore.Num} {rutasslifica.Rutatore.Name}</td>
							<td>{rutasslifica.MonteRuta}</td>
						</tr>
					))}
				</tbody>
			</table>
			{rutasslificaList.length == 0 && <p className="text-white text-center">Rutasslifica non disponibile...</p>}
		</>
	);
}