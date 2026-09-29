function Videojuegos(){
    let games=[
        { id: 1, nombre: "Roblox", plataforma: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, iOS, Android", genero: "Sistema de creación de juegos, MMO", añoL: "2006" },
        { id: 2, nombre: "Minecraft", plataforma: "Multiplataforma (PC, Consolas, Móviles)", genero: "Sandbox, Supervivencia", añoL: "2011" },
        { id: 3, nombre: "Garena Free Fire", plataforma: "iOS, Android", genero: "Battle Royale", añoL: "2017" },
        { id: 4, nombre: "League of Legends", plataforma: "PC, Mac", genero: "MOBA", añoL: "2009" },
        { id: 5, nombre: "Fortnite", plataforma: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Nintendo Switch, Android", genero: "Battle Royale, Sandbox", añoL: "2017" },
        { id: 6, nombre: "PUBG Mobile", plataforma: "iOS, Android", genero: "Battle Royale", añoL: "2018" },
        { id: 7, nombre: "Counter-Strike 2", plataforma: "PC, Linux", genero: "Disparos en primera persona (FPS)", añoL: "2023" },
        { id: 8, nombre: "Halo", plataforma:"Xbox", genero:"ciencia ficcion",añoL:"2001" }    
    ]
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Plataforma</th>
                        <th>Genero</th>
                        <th>Año de lanzamiento</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game) => (
                        <tr key={game.id}>
                            <td>{game.nombre}</td>
                            <td>{game.plataforma}</td>
                            <td>{game.genero}</td>
                            <td>{game.añoL}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Videojuegos;