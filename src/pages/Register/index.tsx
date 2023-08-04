import React from "react";
import { useState } from "react";
import { Button, Form, Input, MyH4, MyP } from "../Register/style";
import { checkValues } from "../../utils/regex";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  Cookies.remove("@app-barber:data");

  const [errorTexts, setErrorTexts] = useState({
    name: "",
    contactNumber: "",
    email: "",
  });

  const [dados, setDados] = useState({
    name: "",
    contactNumber: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    Cookies.set("@app-barber:data", JSON.stringify(dados));
    navigate("/register-password");
  };

  const handleChange = (e: any) => {
    const match = checkValues(e.currentTarget.name, e.target.value);

    switch (e.currentTarget.name) {
      case "name":
        if (match) {
          setErrorTexts({
            ...errorTexts,
            name: "O campo deve conter apenas letras, um espaço entre palavras e não conter espaços após o último nome",
          });
        } else {
          setErrorTexts({
            ...errorTexts,
            name: "",
          });
          setDados({ ...dados, name: e.currentTarget.value });
        }
        break;

      case "contactNumber":
        if (match) {
          setErrorTexts({
            ...errorTexts,
            contactNumber: "O campo deve conter entre 9 e 10 números",
          });
        } else {
          setErrorTexts({
            ...errorTexts,
            contactNumber: "",
          });
          setDados({ ...dados, contactNumber: e.currentTarget.value });
        }
        break;

      case "email":
        setErrorTexts({
          ...errorTexts,
          email: match,
        });
        setDados({ ...dados, email: e.currentTarget.value });
        break;
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2>Faça seu cadastro</h2>

        <MyH4>Nome: </MyH4>
        <Input type="text" name="name" onChange={handleChange} />
        {errorTexts.name !== "" ? <MyP>{errorTexts.name}</MyP> : <></>}

        <MyH4>Telefone:</MyH4>
        <Input type="text" name="contactNumber" onChange={handleChange} />
        {errorTexts.contactNumber !== "" ? (
          <MyP>{errorTexts.contactNumber}</MyP>
        ) : (
          <></>
        )}

        <MyH4>Email: </MyH4>
        <Input type="text" name="email" onChange={handleChange} />
        {errorTexts.email !== "" ? <MyP>{errorTexts.email}</MyP> : <></>}

        <p></p>
        <Button
          onClick={handleSubmit}
          disabled={
            !(errorTexts.name === "") ||
            !(errorTexts.contactNumber === "") ||
            !(errorTexts.email === "")
              ? true
              : false
          }
          type="submit"
        >
          Prosseguir
        </Button>
      </Form>
    </>
  );
};

export default Register;
