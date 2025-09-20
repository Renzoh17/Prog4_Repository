import { createContext, useState, useEffect, useContext } from "react";

const ObjectsContext = createContext(null);

export const ObjectsProvider = ({children}) => {
    const[objects, setObjects] = useState([]);
    useEffect(() => {
        fetch('https://api.restful-api.dev/objects')
        .then(response => {
            if(!response.ok){
                throw new Error("Error en la llamada a la API");
            }
            return response.json();
        })
        .then(data => setObjects(data))
        .catch(error => console.error("Error en la llamada a la API: ", error));
        
        /*setIngredientes([
            {id:1, nombre:"Harina", cant:"1 taza"},
            {id:2, nombre:"Huevos", cant:"2"},
            {id:3, nombre:"Leche", cant:"1/2 taza"},
            {id:4, nombre:"Sal", cant:"1 pizca"} 
        ])*/

    }, []);
    
    return(
        <ObjectsContext.Provider value={objects}>
            {children}
        </ObjectsContext.Provider>
    )
}

export const useObjects = () => {
    return useContext(ObjectsContext);
}
