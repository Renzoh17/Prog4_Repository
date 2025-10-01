import ObjectForm from "../components/ObjectForm";
import ObjectsList from "../components/ObjectsList";
import { ObjectsProvider } from "../contexts/ObjectsContext";

function ObjectsPage(){
    return (
        <ObjectsProvider>
            <h1>Objetos Json</h1> 
            <ObjectsList/>
            <ObjectForm/>          
        </ObjectsProvider>            
    )
}

export default ObjectsPage;