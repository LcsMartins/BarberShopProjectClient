import React from 'react';
import { useState } from 'react';
import { Button, Form, Input, MyH4 } from '../Login/style';

const Login: React.FC = () => {
    const [dados, setDados] = useState({
      email: "",
      password: ""
    });
    const handleSubmit = (e:any) => {
      e.preventDefault();
      console.log(dados);
    };
  
    const handleChange = (e:any) => {
      e.preventDefault();
      const { name, value } = e.target;
      setDados(Object.assign(dados, { [name]: value }));
    };
  
    return (
      <>

          <Form onSubmit={handleSubmit}>
            <h2>Crie a senha desejada</h2>

            <MyH4>Senha: </MyH4>
            <Input
              type="text"
              name="password"
              onChange={handleChange}
            />

            <MyH4>Confirmar senha: </MyH4>
            <Input
              type="text"
              name="password"
              onChange={handleChange}
            />

            <p></p>
            <Button>Confirmar</Button>
          </Form>
      </>
    );
  }

export default Login;

