import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton'
import Lista from './Lista'



var usuario = {"name":"Renzo", "age":23};

function App() {
  const [count, setCount] = useState(0)
  const productos = [
    {id:1, nombre:"Peras", precio:100},
    {id:2, nombre:"Manzanas", precio:200},
    {id:3, nombre:"Naranjas", precio:300}
  ];

  return (
    <>
      <div>
        <p>Clase Prog 4 - UTN FRP</p>
        <br></br><MyButton dato={usuario.name}/><br></br>
        <Lista productos={productos} titulo="Lista de Productos"/>
      </div>
    </>
  )
}

export default App
