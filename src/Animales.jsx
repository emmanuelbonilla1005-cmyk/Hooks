function Animales(){
    let animals=[
        { nombre: "León", especie: "Panthera leo", habitat: "Sabanas y pastizales" },
        { nombre: "Pingüino emperador", especie: "Aptenodytes forsteri", habitat: "Hielos antárticos" },
        { nombre: "Perro", especie: "Canis lupus familiaris", habitat: "ciudades y campo" },
        { nombre: "Delfín nariz de botella", especie: "Tursiops truncatus", habitat: "Océanos templados y tropicales" },
        { nombre: "Águila calva", especie: "Haliaeetus leucocephalus", habitat: "Bosques cercanos a grandes masas de agua" },
        { nombre: "Elefante africano", especie: "Loxodonta africana", habitat: "Bosques, desiertos y sabanas" },
        { nombre: "Tiburón blanco", especie: "Carcharodon carcharias", habitat: "Aguas costeras y templadas" },
        { nombre: "Chimpancé común", especie: "Panthera troglodytes", habitat: "Selvas tropicales y sabanas húmedas" },
        { nombre: "Lobo gris", especie: "Canis lupus", habitat: "Bosques, tundras y montañas" },
        { nombre: "Canguro rojo", especie: "Osphranter rufus", habitat: "Zonas áridas y sabanas secas" }
    ]

    return(
        <div className="app">
            {animals.map((a)=>(
                    <div className="tarjeta">
                        <p>Nombre:{a.nombre}</p>
                        <p>Especie:{a.especie}</p>
                        <p>Habitat: {a.habitat}</p>
                    </div>
                ))}
        </div>
    )
}

export default Animales;