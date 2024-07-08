import React from "react";
import ComponenteHijo from "./ComponenteHijo";
function ComponetePadre(props) {
  const saludo = "Hola Mundo";
  const data = "Data sobre todo la que estamos haciendo";
  return (
    <div>
      <ComponenteHijo mensaje={saludo} detalles={data} />
    </div>
  );
}

export default ComponetePadre;
