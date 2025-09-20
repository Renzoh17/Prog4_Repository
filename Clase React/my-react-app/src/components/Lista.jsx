function Lista(props){
    const productos = props.productos.map(
        p => <li key={p.id}>{p.nombre} - ${p.precio}</li>
    )
    return(
        <>
            <p>{props.titulo}</p>
            <ul>{productos}</ul>
        </>
    )
}

export default Lista;