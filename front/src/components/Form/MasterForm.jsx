import React, { useState } from "react";
import Header from "../Header/Header";
import Form1 from "./Form1";
import Form2 from "./Form2";

const MasterForm = () => {
  //   const [email, setEmail] = useState("");
  const [item, setItem] = useState(0);
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    amount: "",
    time: "",
  });

  //   const handleCallback = (mail) => {
  //     setEmail(mail);
  //   };

  const handleContinuar = () => {
    setItem(item + 1);
  };

  const handleVolver = () => {
    setItem(item - 1);
  };

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log(data);

  return (
    <>
      <Header />
      <div style={{ marginTop: 50, marginBottom: 50 }}>
        {item == 0 && (
          <Form1
            handleContinuar={handleContinuar}
            handleData={handleData}
            data={data}
          />
        )}
        {item == 1 && <Form2 handleVolver={handleVolver} />}
        {/* <p>
        {" "}
        Todas las donaciones a TECHO son deducibles del Impuesto a las Ganancias
        según el Art. 81 de la Ley N° 20.628. Política de privacidad.
      </p> */}
      </div>
    </>
  );
};

export default MasterForm;
