function Futbol(){
    let jugadores=[
  { numero: 1, nombre: "Thibaut", apellido: "Courtois", posicion: "Portero", edad: 34 },
  { numero: 2, nombre: "Achraf", apellido: "Hakimi", posicion: "Lateral Derecho", edad: 27 },
  { numero: 4, nombre: "Virgil", apellido: "van Dijk", posicion: "Defensa Central", edad: 35 },
  { numero: 5, nombre: "Marquinhos", apellido: "Aoás", posicion: "Defensa Central", edad: 32 },
  { numero: 3, nombre: "Alfonso", apellido: "Davies", posicion: "Lateral Izquierdo", edad: 25 },
  { numero: 16, nombre: "Rodri", apellido: "Hernández", posicion: "Pivote Defensivo", edad: 30 },
  { numero: 17, nombre: "Kevin", apellido: "De Bruyne", posicion: "Centrocampista", edad: 35 },
  { numero: 10, nombre: "Jude", apellido: "Bellingham", posicion: "Centrocampista", edad: 23 },
  { numero: 7, nombre: "Vinícius", apellido: "Junior", posicion: "Extremo Izquierdo", edad: 26 },
  { numero: 9, nombre: "Erling", apellido: "Haaland", posicion: "Delantero Centro", edad: 26 },
  { numero: 11, nombre: "Kylian", apellido: "Mbappé", posicion: "Extremo Derecho", edad: 27 }
]

    return(
        <div>
          <table>
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Posición</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {jugadores.map((jugador) => (
                        <tr>
                            <td>{jugador.numero}</td>
                            <td>{jugador.nombre}</td>
                            <td>{jugador.apellido}</td>
                            <td>{jugador.posicion}</td>
                            <td>{jugador.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
}
export default Futbol;