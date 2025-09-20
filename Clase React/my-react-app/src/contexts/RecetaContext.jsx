import { createContext, useState, useEffect, useContext } from "react";

const RecetaContext = createContext(null);

export const RecetaProvider = ({children}) => {
    const[ingredientes, setIngredientes] = useState([]);
    useEffect(() => {
        fetch('/src/data/productos.json')
        .then(response => {
            if(!response.ok){
                throw new Error("Error en la llamada a la API");
            }
            return response.json();
        })
        .then(data => setIngredientes(data))
        .catch(error => console.error("Error en la llamada a la API: ", error));
        
        /*setIngredientes([
            {id:1, nombre:"Harina", cant:"1 taza"},
            {id:2, nombre:"Huevos", cant:"2"},
            {id:3, nombre:"Leche", cant:"1/2 taza"},
            {id:4, nombre:"Sal", cant:"1 pizca"} 
        ])*/

    }, []);
    
    return(
        <RecetaContext.Provider value={ingredientes}>
            {children}
        </RecetaContext.Provider>
    )
}

export const useProductos = () => {
    return useContext(RecetaContext);
}
