import React from 'react';
import { useState } from 'react';
import { Button, Form, Input, MyH4 } from '../Register/style';

const Register: React.FC = () => {
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
            <h2>Faça seu cadastro</h2>

            <MyH4>Nome: </MyH4>
            <Input
              type="text"
              name="nome"
              onChange={handleChange}
            />

            
            <MyH4>Telefone:</MyH4>
            <Input
              type="text"
              name="phone"
              onChange={handleChange}
            />

            <MyH4>Email: </MyH4>
            <Input
              type="text"
              name="email"
              onChange={handleChange}
            />

            <p></p>
            <Button>Prosseguir</Button>
          </Form>
      </>
    );
  }

export default Register;

