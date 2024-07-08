import React from "react";
const headerStyle = {
  textAlign: "center",
  backgroundColor: "black",
  padding: "20px",
  borderBottom: "2px solid #ccc",
};

const titleStyle = {
  fontSize: "2.5rem",
  color: "#333",
};

function Footer(props) {
  return (
    <div style={headerStyle}>
      <p style={titleStyle}>Este es mi nuevo proyecto @2024</p>
    </div>
  );
}

export default Footer;
