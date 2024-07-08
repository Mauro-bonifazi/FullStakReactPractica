import React from "react";

function ComponenteHijo({ mensaje, detalles }) {
  return (
    <div>
      <h1>{mensaje} </h1>
      <p>{detalles}</p>
    </div>
  );
}

export default ComponenteHijo;
