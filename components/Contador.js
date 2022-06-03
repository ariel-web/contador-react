const Contador = () => {
  const [contador, setContador] =  React.useState(0);

  const aumentar = () => {
    setContador(contador + 1)
  }
  const disminuir = () => {
    if (contador > 0){
      setContador(contador - 1)
    }

  }
  return (
  <div>
      <h1 className={ contador == 0? "menor": "mayor"}>Contador: {contador} </h1>
      <hr></hr>
      <button onClick={ () => aumentar() }>Aumentar</button>
      <button onClick={ () => disminuir() }>Disminuir</button>
  </div>
  );
}