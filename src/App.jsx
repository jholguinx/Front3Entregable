import { useState } from "react";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los input
  const [valid, setValid] = useState(false)
  const [nombre, setNombre] = useState()
  const [colorFav, setColorFav] = useState()
  const [msg,setMsg] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim().length < 3 || nombre.startsWith(" ")) {
      setMsg("Name must have at least 3 characters and no spaces at the beginning");
    }
    if (colorFav.trim().length < 6) {
      setMsg("Description must have at least 6 characters");
    }
    setValid(true)
    console.log("Name:", nombre);
    console.log("Colorfav:", colorFav);
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Ingresa tu nombre" onChange={(e) => setNombre(e.target.value)}/>
        <input type="text" name="colorFav" placeholder="Ingresa tu color favorito(formato HEX)" onChange={(e) => setColorFav(e.target.value)}/>
        <button>Enviar</button>
        {msg}
      </form>
      {valid && <Card nombre={nombre}  colorFav={colorFav} />}
    </div>
  );
}

export default App;