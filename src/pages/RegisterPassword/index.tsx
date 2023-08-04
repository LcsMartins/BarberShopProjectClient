import React, { useEffect, useState } from "react";
import { Button, Form, Input, MyH4, MyP } from "../RegisterPassword/style";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { checkValues } from "../../utils/regex";
import { api, token } from "../../services/api";

const RegisterPassword: React.FC = () => {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState(" ");

  const user: string = Cookies.get("@app-barber:data") as string;
  let userObj = JSON.parse(user);
  const [passwords, setPasswords] = useState({
    firstPassword: "",
    secondPassword: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    userObj["password"] = passwords.firstPassword;

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userObj),
    };
    fetch(`${api}customer`, requestOptions);

    navigate("/login");
  };

  const handleFirstChange = (e: any) => {
    const match = checkValues("password", e.target.value);

    setErrorText(match);
    if (match === "") {
      setPasswords({ ...passwords, firstPassword: e.target.value });
    }
  };
  const handleSecondChange = (e: any) => {
    const match = checkValues("password", e.target.value);

    setErrorText(match);
    if (match === "") {
      setPasswords({ ...passwords, secondPassword: e.target.value });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2>Crie a senha desejada</h2>

        <MyH4>Senha: </MyH4>
        <Input type="text" name="firstPassword" onChange={handleFirstChange} />
        <MyH4>Confirmar senha: </MyH4>
        <Input
          type="text"
          name="secondPassword"
          onChange={handleSecondChange}
        />
        {errorText !== "" ? <MyP>{errorText}</MyP> : <></>}
        {passwords.firstPassword !== passwords.secondPassword ? (
          <MyP>As senhas devem ser iguais</MyP>
        ) : (
          <></>
        )}
        <Button
          onClick={handleSubmit}
          disabled={
            !(errorText === "") ||
            passwords.firstPassword !== passwords.secondPassword
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

export default RegisterPassword;
