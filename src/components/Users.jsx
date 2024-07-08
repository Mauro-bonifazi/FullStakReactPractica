import React from "react";

function Users({ img, nombre, detalles }) {
  return (
    <div style={styles.feedContainer}>
      <p style={styles.name}>Nombre: {nombre}</p>
      <img src={img} alt={nombre} style={styles.image} />
      <p style={styles.paragraph}>{detalles}</p>
      <button style={styles.button}>Info</button>
    </div>
  );
}
const styles = {
  feedContainer: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
    backgroundColor: "#fff",
    marginBottom: "16px",
    marginTop: "15px",
    padding: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.5s",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "16px",
  },
  name: {
    fontSize: "24px",
    margin: "16px 0",
    fontWeight: "bold",
    color: "#333",
  },
  paragraph: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.5",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "16px",
  },
};
export default Users;
