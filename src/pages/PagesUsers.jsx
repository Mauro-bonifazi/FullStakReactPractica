import React from "react";
import Users from "../components/Users";

function PagesUsers() {
  return (
    <div>
      <h1 style={style.title}>Paguina de Usuarios</h1>
      <Users
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqd_aCzhcRtqn7c4q6l4FKBbaLgU5xQ1BRhA&s"
        nombre="Manuel Naranjo"
        detalles="Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure."
      ></Users>
      <Users
        img="https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg"
        nombre="Melisa Paredes"
        detalles="Nor is there anyone who loves or pursues or desires to obtain pain of itself, because"
      ></Users>{" "}
      <Users
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwa9iKF0g8-t5Kf8_JCp9tS6o8UGGDonVa1Q&s"
        nombre="Merco Polo"
        detalles="Nor is there anyone who loves or pursues or desires to obtain pain of itself, because"
      ></Users>
      de
    </div>
  );
}
const style = {
  title: {
    textAlign: "center", // Centrar el texto horizontalmente
    margin: "16px 0", // Ajustar el margen superior e inferior
    fontSize: "32px", // Ajustar el tamaño de la fuente si es necesario
    fontWeight: "bold", // Hacer que el texto sea negrita
  },
};

export default PagesUsers;
