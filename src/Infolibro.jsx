function Infolibro(){
    let nombreL="Crimen y Castigo"
    let autor="fiódor dostoyevski"
    let Apublicacion="1866"
    let editorial="Editorial Alma"
    let nPaginas=496
    return(
        <div>
            <h1>INFORMACION DEL LIBRO</h1>
            <h2>Titulo: {nombreL}</h2>
            <h3>Autor: {autor}</h3>
            <p>Año de publicación: {Apublicacion}</p>
            <h3>{editorial} </h3>
            <p>N° de paginas: {nPaginas}</p>
        </div>
    )
}

export default Infolibro;