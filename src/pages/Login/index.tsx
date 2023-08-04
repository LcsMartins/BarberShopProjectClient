import React from "react";
import { useState, useCallback } from "react";
import { Button, Form, Input, MyH4 } from "../Login/style";
import Cookies from "js-cookie";
import { api, token } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [dados, setDados] = useState({
    email: "",
    password: "",
  });
  const { signIn } = useAuth();

  const handleSubmit = async () => {
    signIn({ email: dados.email, password: dados.password });
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDados(Object.assign(dados, { [name]: value }));
  };

  Cookies.remove("@app-barber:data");
  return (
    <>
      <Form>
        <h2>Faça o login</h2>

        <MyH4>Email:</MyH4>
        <Input type="text" name="email" onChange={handleChange} />

        <MyH4>Senha: </MyH4>
        <Input type="text" name="password" onChange={handleChange} />

        <p></p>

        <Button onClick={handleSubmit}>Entrar</Button>
      </Form>
    </>
  );
};

export default Login;

// const requestOptions = {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(dados),
// };
// fetch(`${api}customer-auth`, requestOptions);
