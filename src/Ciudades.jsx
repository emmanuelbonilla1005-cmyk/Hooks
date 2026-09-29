function Ciudades(){
    let ciudades=[ 
        "Bogotá",
        "Medellín",
        "Cali",
        "Barranquilla",
        "Cartagena",
        "Santa Marta",
        "Bucaramanga",
        "Pereira",
        "Manizales",
        "Armenia"
    ]
    return(
        <div>
            <h1>CIUDADES DE COLOMBIA</h1>
          <p>{ciudades.map((index)=>(
                <p>{index}</p>
            ))}</p> 
        </div>
    )
}

export default Ciudades;