import React from "react";
import ComponenteHijo from "./ComponenteHijo";
import { useState } from "react";
function ComponetePadre(props) {
  const [suma, setSuma] = useState(0);
  const sumar = () => {
    setSuma(suma + 1);
  };
  const saludo = "Hola Mundo";
  const data = "Data sobre todo la que estamos haciendo";
  return (
    <div>
      <h5>Visitas:{suma}</h5>
      <button onClick={sumar}>Visitas + </button>

      <ComponenteHijo mensaje={saludo} detalles={data} />
    </div>
  );
}

export default ComponetePadre;
