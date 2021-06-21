const ExpList = ({ lista }) => {
  // siempre en la llave. si no es una props
  console.log("lista de gastos", lista);

  // let objeto = lista[0];
  // let objeto2 = lista[1];

  //console.log(objeto.id);
  return (
    <>
      <h1>lista de gastos</h1>
      <h2> algo</h2>

      <table border="1" align="center">
        <tr>
          <td>Nombre</td>
          <td>Monto</td>
          <td>Categoria</td>
        </tr>
        {lista.map((item) => {
          return (
            <>
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.monto}</td>
                <td>{item.categoria}</td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};

export default ExpList;
