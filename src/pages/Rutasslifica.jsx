import { useEffect, useState } from "react";
import Classifica from "../components/Classifica";
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
		// console.log(rutasslificaList);
	}

	return (
		<>
			<h1 className="h1 text-white">Rutasslifica</h1>
			<h2 className="h3 text-center text-white">Giornata {GIORNATA}</h2>
			{/* <Classifica /> */}
			<table className="classifica">
				<thead>
					<tr>
						<th>#</th>
						<th>Rutatore</th>
						<th>MonteRuta</th>
					</tr>
				</thead>
				<tbody>
					{rutasslificaList.length > 0 ? rutasslificaList.map((rutasslifica, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>#{rutasslifica.Num} {rutasslifica.Name}</td>
							<td>{rutasslifica.MonteRuta}</td>
						</tr>
					)) :
						<p className="text-white text-center">Rutasslifica non disponibile...</p>}
					{/* {[
						[3, 'Stella', 1],
						[2, 'Cardazzo', 9],
						[13, 'Cappone', 75],
						[9, 'Mantovan', 55],
						[7, 'Tognella', 45],
						[15, 'Peruzzotti', 4],
						[21, 'Longobardi', 4],
						[23, 'Ferri', 3],
						[10, 'Losi', 2],
						[18, 'Puricelli', 15],
						[19, 'Siviero', 15],
						[12, 'Sala', 5],
						[6, 'Bozzano',],
						[8, 'Scarabelli',],
					].map(([maglia, rutatore, monteruta], index) => (
						<tr key={maglia}>
							<td>{index + 1}</td>
							<td>#{maglia} {rutatore}</td>
							<td>{monteruta}</td>
						</tr>
					))} */}
				</tbody>
			</table>
		</>
	);
}