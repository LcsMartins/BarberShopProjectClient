import React, { useCallback, useEffect, useState } from "react";
import {
  MainContainer,
  ContentContainer,
  Card,
  FirstColumn,
  SecondColumn,
  EditLink,
} from "./styles";
import { api, token, id } from "../../services/api";
import EditInfo from "../../components/EditInfo";

interface User {
  id: string;
  email: string;
  name: string;
  contactNumber: string;
}

const initialUser = {
  id: "",
  email: "",
  name: "",
  contactNumber: "",
};

export function maskNumber(number: string) {
  return `(${number.slice(0, 2)}) ${number.slice(2, 6)}-${number.slice(6)}`;
}

const Account: React.FC = () => {
  const [user, setUser] = useState<User>(initialUser);
  const [modifiedUser, setModifiedUser] = useState<User>(initialUser);
  const [submitted, setSubmitted] = useState(false);
  const loadUser = useCallback(async () => {
    const headers = {
      authorization: `Bearer ${token}`,
    };
    await fetch(`${api}customer/${id}`, { headers })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setModifiedUser(data);
      });
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  //ajuda nisso
  useEffect(() => {
    if (submitted) {
      const requestOptions = {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedUser),
      };
      fetch(`${api}customer/${id}`, { ...requestOptions })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  }, [submitted, modifiedUser]);

  return (
    <div>
      <MainContainer>
        <Card>
          <ContentContainer>
            <FirstColumn>Nome</FirstColumn>
            <SecondColumn>{user.name}</SecondColumn>
          </ContentContainer>
          <EditInfo
            modifiedUser={modifiedUser}
            setModifiedUser={setModifiedUser}
            propType={"name"}
            setSubmitted={setSubmitted}
          ></EditInfo>
        </Card>

        <Card>
          <ContentContainer>
            <FirstColumn>Endereço de email</FirstColumn>
            <SecondColumn>{user.email}</SecondColumn>
          </ContentContainer>
          <EditInfo
            modifiedUser={modifiedUser}
            setModifiedUser={setModifiedUser}
            propType={"email"}
            setSubmitted={setSubmitted}
          ></EditInfo>
        </Card>

        <Card>
          <ContentContainer>
            <FirstColumn>Número de telefone</FirstColumn>
            <SecondColumn>{maskNumber(user.contactNumber)}</SecondColumn>
          </ContentContainer>
          <EditInfo
            modifiedUser={modifiedUser}
            setModifiedUser={setModifiedUser}
            propType={"contactNumber"}
            setSubmitted={setSubmitted}
          ></EditInfo>
        </Card>
      </MainContainer>
    </div>
  );
};

export default Account;
