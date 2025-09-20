import ListaIngredientes from "../components/ListaIngredientes";
import { RecetaProvider } from "../contexts/RecetaContext";

function RecetaPage(){
    return (
        <RecetaProvider>
            <h1>Receta de Cocina</h1>
            <h2>Ingredientes</h2>            
            <ListaIngredientes titulo={"Hamburguesa"}/>
        </RecetaProvider>            
    )
}

export default RecetaPage;