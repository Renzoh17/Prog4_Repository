import { useObjects } from "../contexts/ObjectsContext";

function ObjectsList(){
    const objects = useObjects();
    const listObjects = objects.map((obj) => (
        <li key={obj.id}>{obj.name}
        <br></br>Color: {obj.data?.color || "nulo"} - Capacidad: {obj.data?.capacity || "nulo"}</li>
    ));
    return(
        <>
            <ul>{listObjects}</ul>
        </>
    )
}

export default ObjectsList;