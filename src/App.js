import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  //useState
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camisa Roja", precio: 50 },
    { id: 2, nombre: "Camisa Negra", precio: 60 },
    { id: 3, nombre: "Camisa verde", precio: 40 },
    { id: 4, nombre: "Camisa Azul", precio: 30 },
  ]);

  const [carrito, agregarProducto] = useState([]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header title="El jeder jsjs" fecha={fecha} namber={300} />
      <h1>Lista de productos mi papá</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito carrito={carrito} agregarProducto={agregarProducto} />

      <Footer />
    </Fragment>
  );
}

export default App;
