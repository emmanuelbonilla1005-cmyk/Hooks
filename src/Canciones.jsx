function Canciones(){
    let canciones = [
        { id: 1, titulo: "La Camisa Negra", artista: "Juanes", album: "Mi Sangre", ano: 2004 },
        { id: 2, titulo: "Hips Don't Lie", artista: "Shakira", album: "Oral Fixation, Vol. 2", ano: 2005 },
        { id: 3, titulo: "La Tierra del Olvido", artista: "Carlos Vives", album: "La Tierra del Olvido", ano: 1995 },
        { id: 4, titulo: " Cali Pachanguero", artista: "Grupo Niche", album: "No Hay Quinto Mal", ano: 1984 },
        { id: 5, titulo: "Mi Gente", artista: "J Balvin", album: "Vibras", ano: 2017 },
        { id: 6, titulo: "Hawái", artista: "Maluma", album: "Papi Juancho", ano: 2020 },
        { id: 7, titulo: "La Rebelión", artista: "Joe Arroyo", album: "Musa Original", ano: 1986 },
        { id: 8, titulo: "Bichota", artista: "Karol G", album: "KG0516", ano: 2020 }
];
    return(
        <div className="tabla">
           <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Artista</th>
                        <th>Albúm</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody>
                    {canciones.map((cancion) => (
                        <tr key={cancion.id}>
                            <td>{cancion.titulo}</td>
                            <td>{cancion.artista}</td>
                            <td>{cancion.album}</td>
                            <td>{cancion.ano}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
}

export default Canciones;