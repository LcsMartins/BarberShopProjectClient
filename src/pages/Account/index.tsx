import React, { useCallback, useEffect, useState } from 'react';
import { MainContainer, ContentContainer, Card, FirstColumn, SecondColumn, EditLink } from './styles';
import { api, token, id } from '../../services/api';
import EditInfo from '../../components/EditInfo';

interface User{
  id: string,
  email: string,
  name: string,
  contactNumber: string,
}

const initialUser={
  id: '',
  email: '',
  name:'' ,
  contactNumber: '',
}

const Account: React.FC = () => {
    const [user, setUser] = useState< User >(initialUser);
    const [modifiedUser, setModifiedUser] = useState<User>(initialUser);

    const loadUser = useCallback(async () => {
      const headers = {
          authorization: `Bearer ${token}`,
      };
      await fetch(`${api}customer/${id}`, {headers,})   
              .then(response => response.json())
              .then(data =>{
                setUser(data);
                setModifiedUser(data);
              })
    },[]) 

    useEffect(()=>{loadUser()},[loadUser])
//fazer a flag para dar o ok, usar via state, é isso
//inicio de tudo q é state tem q ser na pagina, se precisar em componente vai de props
// manipulacao valores input, validar , regex , se tiver alguma condicao faltante, mostrar

    return (
      <div>
        <MainContainer>
              <Card>
                  <ContentContainer>
                      <FirstColumn>
                          Nome
                      </FirstColumn>
                      <SecondColumn>
                          {user.name}
                      </SecondColumn>
                  </ContentContainer>
                  <EditInfo modifiedUser={modifiedUser} setModifiedUser={setModifiedUser} propType={'name'} ></EditInfo>
              </Card>
              
              <Card>
                  <ContentContainer>
                      <FirstColumn>
                          Endereço de email
                      </FirstColumn>
                      <SecondColumn>
                         {user.email}
                      </SecondColumn>
                  </ContentContainer>
                  <EditInfo modifiedUser={modifiedUser} setModifiedUser={setModifiedUser} propType={'email'}></EditInfo>
              </Card>

              <Card>
                  <ContentContainer>
                      <FirstColumn>
                          Número de telefone
                      </FirstColumn>
                      <SecondColumn>
                        {user.contactNumber}
                      </SecondColumn>
                  </ContentContainer>
                  <EditInfo modifiedUser={modifiedUser} setModifiedUser={setModifiedUser} propType={'contactNumber'}></EditInfo>
              </Card>
              
        </MainContainer>

      </div>
    )
  }

export default Account;

