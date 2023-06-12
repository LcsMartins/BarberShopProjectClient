import React, { useRef } from "react";
import styled from "styled-components";

import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalContainer,
} from "./style";

interface User{
  id: string,
  email: string,
  name: string,
  contactNumber: string,
}

interface ModalProps{
  showModal: boolean,
  setShowModal:(value: boolean) => void,
  modifiedUser: User,
  setModifiedUser: (value: User) => void,
  propType?: string,
}

export const Modal: React.FC < ModalProps > = ({ showModal , setShowModal, propType, modifiedUser, setModifiedUser }) => {
  const modalRef = useRef < HTMLDivElement > (null);
  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };


  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalContainer>
            <ModalContent>
              <h1>{modifiedUser.email}</h1>
              <button>Confirmar novo email</button>
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
