import React, { useCallback, useEffect, useState } from 'react';
//import './Home.css';
import { ReserveLine } from '../../components/ReserveLine';
import { MainContainer, ContentContainer, Card, Wrapper, FirstColumn, SecondColumn, EditLink } from './styles';
import Nav from '../../components/Nav';

const Account: React.FC = () => {

    return (
      <div>
        <MainContainer>
              <Card>
                  <ContentContainer>
                      <FirstColumn>
                          Nome
                      </FirstColumn>

                      <SecondColumn>
                          Lucas Martins
                      </SecondColumn>
                  </ContentContainer>

                  <EditLink>Editar</EditLink>
              </Card>
            
            <Wrapper/>
              
              <Card>
                  <ContentContainer>
                      <FirstColumn>
                          Endereço de email
                      </FirstColumn>

                      <SecondColumn>
                          xuxa@xuxa.com
                      </SecondColumn>
                  </ContentContainer>

                  <EditLink>Editar</EditLink>
              </Card>

              <Wrapper/>
              <Card>
                  <ContentContainer>
                      <FirstColumn>
                          Número de telefone
                      </FirstColumn>

                      <SecondColumn>
                          (24)94433-5555
                      </SecondColumn>
                  </ContentContainer>

                  <EditLink>Editar</EditLink>
              </Card>
              <Wrapper/>
              <Wrapper/>
              <Wrapper/>
              <Wrapper/>
              <Wrapper/>
              <Wrapper/>
              <Wrapper/>
              
             

        </MainContainer>

      </div>
    )
  }

export default Account;

