
export default function Classifica() {
    return (
        <>
            <table className="classifica">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Rutatore</th>
                        <th>MonteRuta</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        [3, 'Stella', 100],
                        [2, 'Cardazzo', 90],
                        [13, 'Cappone', 75],
                        [9, 'Mantovan', 55],
                        [7, 'Tognella', 45],
                        [15, 'Peruzzotti', 40],
                        [21, 'Longobardi', 40],
                        [23, 'Ferri', 30],
                        [10, 'Losi', 20],
                        [18, 'Puricelli', 15],
                        [19, 'Siviero', 15],
                        [12, 'Sala', 5],
                        [6, 'Bozzano', 0],
                        [8, 'Scarabelli', 0],
                    ].map(([maglia, rutatore, monteruta], index) => (
                        <tr key={maglia}>
                            <td>{index+1}</td>
                            <td>#{maglia} {rutatore}</td>
                            <td>{monteruta}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}