function Peliculas(){
   let peliculas= [
  { id: 1, titulo: "Inception", director: "Christopher Nolan", genero: "Ciencia ficción, Acción", ano: 2010, duracion: "148 min" },
  { id: 2, titulo: "The Godfather", director: "Francis Ford Coppola", genero: "Drama, Crimen", ano: 1972, duracion: "175 min" },
  { id: 3, titulo: "The Dark Knight", director: "Christopher Nolan", genero: "Acción, Drama", ano: 2008, duracion: "152 min" },
  { id: 4, titulo: "Pulp Fiction", director: "Quentin Tarantino", genero: "Crimen, Drama", ano: 1994, duracion: "154 min" },
  { id: 5, titulo: "Interstellar", director: "Christopher Nolan", genero: "Ciencia ficción, Drama", ano: 2014, duracion: "169 min" },
  { id: 6, titulo: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", genero: "Ciencia ficción, Acción", ano: 1999, duracion: "136 min" },
  { id: 7, titulo: "Parasite", director: "Bong Joon Ho", genero: "Drama, Thriller", ano: 2019, duracion: "132 min" },
  { id: 8, titulo: "Fight Club", director: "David Fincher", genero: "Drama, Thriller", ano: 1999, duracion: "139 min" },
  { id: 9, titulo: "Spirited Away", director: "Hayao Miyazaki", genero: "Animación, Fantasía", ano: 2001, duracion: "125 min" },
  { id: 10, titulo: "Gladiator", director: "Ridley Scott", genero: "Acción, Drama histórico", ano: 2000, duracion: "155 min" }
]

    return(
        <div>
            {peliculas.map((a)=>(
                    <div className="tarjeta">
                        <p>Id: {a.id}</p>
                        <p>Titulo:{a.titulo}</p>
                        <p>Genero:{a.genero}</p>
                        <p>Año: {a.ano}</p>
                        <p>Duracion: {a.duracion}</p>
                    </div>
                ))}
        </div>
    )
}

export default Peliculas;