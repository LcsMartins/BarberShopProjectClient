import React, { useRef, useState, useEffect } from "react";
import { checkValues } from "./regex";

import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalContainer,
} from "./style";

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

interface ModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  modifiedUser: User;
  setModifiedUser: (value: User) => void;
  setSubmitted: (value: boolean) => void;
  propType: string;
}

function getWordViaProps(propType: string) {
  if (propType === "name") {
    return "nome";
  } else if (propType === "contactNumber") {
    return "número de contato";
  } else {
    return "email";
  }
}
function getInfoViaProps(propType: string, modifiedUser: User) {
  if (propType === "name") {
    return modifiedUser.name;
  } else if (propType === "contactNumber") {
    return modifiedUser.contactNumber;
  } else {
    return modifiedUser.email;
  }
}

export const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  propType,
  modifiedUser,
  setModifiedUser,
  setSubmitted,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [userCopy, setUserCopy] = useState<User>(initialUser);
  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const [errorText, setErrorText] = useState(" ");
  const [isEmpty, setIsEmpty] = useState(true);

  const handleName = (e: any) => {
    e.currentTarget.value === "" ? setIsEmpty(true) : setIsEmpty(false);
    setModifiedUser({ ...modifiedUser, [propType]: e.currentTarget.value });
    setSubmitted(false);
    const match = checkValues(propType, e.target.value);

    switch (propType) {
      case "nome":
        if (!match) {
          setErrorText("O campo deve conter apenas letras");
        } else {
          setErrorText("");
        }
        break;

      case "name":
        setErrorText(match);
        break;

      case "contactNumber":
        if (match) {
          setErrorText("O campo deve conter entre 9 e 10 números");
        } else {
          setErrorText("");
        }
        break;

      case "email":
        setErrorText(match);
        break;
    }
  };

  const handleSubmit = (e: any) => {
    setSubmitted(true);
  };

  useEffect(() => {
    if (userCopy?.id === "") {
      setUserCopy(modifiedUser);
    }
  }, [modifiedUser, userCopy]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalContainer>
            <ModalContent>
              <h4>
                Exibindo seu {getWordViaProps(propType)} cadastrado:{" "}
                {getInfoViaProps(propType, userCopy)}
              </h4>

              <form>
                <h4 className="label">
                  Insira o novo {getWordViaProps(propType)} desejado:
                </h4>
                <input onChange={handleName} className="input" type="text" />
                <p>{errorText}</p>
                <button
                  onClick={handleSubmit}
                  disabled={!(errorText === "") || isEmpty ? true : false}
                  type="submit"
                >
                  Confirmar alteração
                </button>
              </form>
            </ModalContent>
            <CloseModalButton
              aria-label="Close Modal"
              onClick={() => setShowModal(!showModal)}
            />
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};
