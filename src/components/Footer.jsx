import React from "react";
const footer = {
  backgroundcolor: "#333",
  color: "#fff",
  textalign: "center",
  padding: "20px 0",
  position: "fixed",
  width: "100%",
  bottom: "0",
};
const footerContent = {
  maxwidth: "1200px",
  margin: "0 auto",
};
const footerP = {
  margin: "5px 0",
};

function Footer(props) {
  return (
    <footer style={footer}>
      <div style={footerContent}>
        <p style={footerP}>
          &copy; 2024 Innovare Software. Todos los derechos reservados.
        </p>
        <p style={footerP}>Desarrollo Web</p>
      </div>
    </footer>
  );
}

export default Footer;
