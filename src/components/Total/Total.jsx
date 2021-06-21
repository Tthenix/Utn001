const Total = ({ lista }) => {
  let suma = 0;

  for (var i = 0; i < lista.length; i++) {
    suma = suma + lista[i].monto;
  }

  console.log("totla", suma);
  return (
    <>
      <h3>Total:{suma}</h3>
    </>
  );
};
export default Total;
