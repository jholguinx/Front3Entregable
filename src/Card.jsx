//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  return (
    <div className="card">
      <p>Hola {props.nombre}!</p>
      <p>Sabemos que tu color favorito es:</p>
      <div style={{backgroundColor: props.colorFav}}>{props.colorFav}</div>
    </div>
  );
}

export default Card;
