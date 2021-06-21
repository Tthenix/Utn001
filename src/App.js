import logo from "./logo.svg";
import "./App.css";
import ExpList from "./components/ExpList/ExpList";
import React, { useState } from "react";
import ExpForm from "./components/ExpForm/ExpForm";
import Total from "./components/Total/Total";

function App() {
  const [expensives, setExpensives] = useState([
    { id: 1, nombre: "gasto1", monto: 15, categoria: "general" },
    { id: 2, nombre: "gasto 2 ", monto: 18, categoria: "comida" },
  ]);

  const addExp = (nombre, monto, categoria) => {
    // agregar el valor

    let id = expensives.length + 1;
    let objDato = { id, nombre, monto, categoria };

    const newDatos = [];
    newDatos.push(...expensives); //spread operator
    newDatos.push(objDato);

    setExpensives(newDatos);
  };

  return (
    <div className="App">
      <h1>Aplicacion de gastos</h1>
      <h3>
        {" "}
        Total de gastos <Total lista={expensives} />{" "}
      </h3>
      <ExpForm addExp={addExp} />

      <ExpList lista={expensives} />
      <Total lista={expensives} />
    </div>
  );
}

export default App;
