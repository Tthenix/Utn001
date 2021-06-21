const ExpForm = ({ addExp }) => {
  const grabarDatos = (e) => {
    e.preventDefault();
    // console.log(e);
    //alert("Hola");

    console.log(e.target.elements);
    const [nombre, monto, categoria] = e.target.elements;
    console.log("nombre", nombre.value);
    console.log("monto", monto);
    console.log("categoria", categoria);

    let montoEntero = parseFloat(monto.value);

    if (isNaN(montoEntero)) {
      alert("ingrese valor entero");
    } else addExp(nombre.value, montoEntero, categoria.value);
  };

  return (
    <>
      <form onSubmit={grabarDatos}>
        <table align="center">
          <tr>
            <td>
              <label>Nombre</label>
            </td>
            <td>
              <input type="text" placeholder="nombre del gasto"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Monto</label>
            </td>
            <td>
              <input type="text"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Categoria</label>
            </td>
            <td>
              <input type="text"></input>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button type="submit">Grabar</button>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};

export default ExpForm;
