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
            <h2>Faça o login</h2>

            <MyH4>Email:</MyH4>
            <Input
              type="text"
              name="email"
              onChange={handleChange}
            />

            <MyH4>Senha: </MyH4>
            <Input
              type="text"
              name="password"
              onChange={handleChange}
            />
            
            <p></p>
            <Button>Entrar</Button>
          </Form>
      </>
    );
  }

export default Login;

