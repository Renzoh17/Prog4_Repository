import './App.css'
import MyButton from './components/MyButton'
import Lista from './components/Lista'
import RecetaPage from './pages/receta'
import ObjectsPage from './pages/Objects';
import SingleObject from './components/SingleObject';

var usuario = {"name":"Renzo", "age":23};

function App() {

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
        <RecetaPage/>
        <ObjectsPage/>
        <SingleObject id={1}/>
      </div>
    </>
  )
}

export default App;
