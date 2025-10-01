import { Box, Button, FormLabel, TextField, Paper} from "@mui/material"
import { useState } from "react";
import { useObjects } from "../contexts/ObjectsContext";

const ObjectForm = () => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const addObject = useObjects();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await addObject(name, color);
            setName("");
            setColor("");
        } catch(err){
            console.log("error");
        }
    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Paper>
            <FormLabel>Insertar Objeto</FormLabel><br/>
            <TextField label="Nombre del objeto" value={name} onChange={(e) => setName(e.target.value)} required/><br/>
            <TextField label="Color" value={color} onChange={(e) => setColor(e.target.value)} required/><br/>
            <Button type="submit">Agregar</Button>
            </Paper>
        </Box>
    )
}

export default ObjectForm;