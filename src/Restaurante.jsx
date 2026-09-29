function Restaurante(){
    let menu = [
  { id: 1, nombre: "Asado de tira", categoria: "Carnes", precio: 15900 },
  { id: 2, nombre: "Ceviche clásico", categoria: "Pescados y Mariscos", precio: 12500 },
  { id: 3, nombre: "Fettuccine Alfredo", categoria: "Pastas", precio: 9800 },
  { id: 4, nombre: "Ensalada César", categoria: "Ensaladas", precio: 7500 },
  { id: 5, nombre: "Sopa de cebolla", categoria: "Entradas", precio: 6200 },
  { id: 6, nombre: "Hamburguesa artesanal", categoria: "Comida Rápida", precio: 11000 },
  { id: 7, nombre: "Sushi Roll California", categoria: "Comida Asiática", precio: 13500 },
  { id: 8, nombre: "Tacos al pastor", categoria: "Comida Mexicana", precio: 8900 },
  { id: 9, nombre: "Risotto de champiñones", categoria: "Arroces", precio: 14200 },
  { id: 10, nombre: "Lomo saltado", categoria: "Carnes", precio: 16500 }
];
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {menu.map((plato) => (
                        <tr>
                            <td>{plato.id}</td>
                            <td>{plato.nombre}</td>
                            <td>{plato.categoria}</td>
                            <td>{plato.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
}

export default Restaurante;