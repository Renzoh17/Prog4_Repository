import { useEffect, useState } from "react";

function SingleObject({id}){
    const[object, setObject] = useState([]);
    useEffect(() => {
        fetch('https://api.restful-api.dev/objects/' + id)
        .then(response => {
            if(!response.ok){
                throw new Error("Error en la llamada a la API");
            }
            return response.json();
        })
        .then(data => setObject(data))
        .catch(error => console.error("Error en la llamada a la API: ", error));

    }, []);
    return(
        <>
            <h1>Objeto con ID {id}</h1>
            {object &&
            <>
            <p>{object.name}</p> 
            <p>Color: {object.data?.color || "nulo"}</p> 
            <p>Capacidad: {object.data?.capacity || "nulo"}</p>
            </>
            }
        </>
    )
}

export default SingleObject;