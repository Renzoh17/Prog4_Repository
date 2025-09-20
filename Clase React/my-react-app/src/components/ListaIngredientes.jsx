import { useProductos } from "../contexts/RecetaContext";

function ListaIngredientes(props){

    const productos = useProductos();
    const listProductos = productos.map(
        p => <li key={p.id}>{p.cant} - {p.nombre}</li>
    )
    return(
        <>
            <p>{props.titulo}</p>
            <ul>{listProductos}</ul>
        </>
    )
}

export default ListaIngredientes;
