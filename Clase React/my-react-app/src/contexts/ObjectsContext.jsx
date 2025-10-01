import { createContext, useState, useEffect, useContext } from "react";

const ObjectsContext = createContext(null);

/*https://api.restful-api.dev/objects*/ 

export const ObjectsProvider = ({children}) => {
    const[objects, setObjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const addObject = async (name, color) => {
        setIsLoading(true)
        try{
            const response = await fetch("http://localhost:8000/object",{
               method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({name: name, data: {color: color}})
            })
            if(!response.ok){
                throw new Error("Error al crear el objeto")
            }
            await fetchObjects();
        }catch(error){
            throw error
        }
        finally{
            setIsLoading(false);
        }
    }
    
    const fetchObjects = async () => {
        await fetch('http://localhost:8000/objects')
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

    }
     useEffect(() => {
        fetchObjects();
    }, []);
    
return(
    <ObjectsContext.Provider value={{objects, addObject, isLoading}}>
        {children}
    </ObjectsContext.Provider>
    )
}

export const useObjects = () => {
    return useContext(ObjectsContext);
}


