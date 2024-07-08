import { Colors } from "./colors";
function Feed({ img, title, detail, color }) {
  const showAlert = () => {
    alert("Alert");
  };
  return (
    <div style={styles.feedContainer}>
      <img src={img} alt={title} style={styles.image} />
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.paragraph}>{detail}</p>
      <Colors show={showAlert} color={color} />
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
    backgroundColor: "#eee",
    marginBottom: "16px",
    marginTop: "15px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  title: {
    fontSize: "24px",
    margin: "16px 0",
  },
  paragraph: {
    fontSize: "16px",
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
export default Feed;
