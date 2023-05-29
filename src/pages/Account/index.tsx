import React, { useCallback, useEffect, useState } from 'react';
import { MainContainer, ContentContainer, Card, FirstColumn, SecondColumn, EditLink } from './styles';

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

        </MainContainer>

      </div>
    )
  }

export default Account;

