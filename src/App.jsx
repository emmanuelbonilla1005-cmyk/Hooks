import './App.css'
import Infolibro from "./Infolibro"
import Ciudades from './Ciudades'
import Canciones from './Canciones'
import Animales from './Animales'
import Videojuegos from './Videojuegos'
import Futbol from './Futbol'
import Peliculas from './Peliculas'
import Restaurante from './Restaurante'

function App() {

  return (
    <div className='inicio'>
        <Infolibro></Infolibro>
        <Ciudades></Ciudades>
        <Canciones></Canciones>
        <Animales></Animales>
        <Videojuegos></Videojuegos>
        <Futbol></Futbol>
        <Peliculas></Peliculas>
        <Restaurante></Restaurante>
    </div>
  )
}

export default App
