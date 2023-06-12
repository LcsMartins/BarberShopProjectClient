import React, { useState } from 'react';
import { Modal } from './Modal';
import { EditButton } from './style';

interface User{
  id: string,
  email: string,
  name: string,
  contactNumber: string,
}

interface User{
  id: string,
  email: string,
  name: string,
  contactNumber: string,
}

interface EditInfoProps{
  modifiedUser: User,
  setModifiedUser: (value: User) => void,
  propType?: string,
}

const EditInfo: React.FC <EditInfoProps> = ({modifiedUser, setModifiedUser, propType }) => {
  const [showModal, setShowModal] = useState(false)
 
    const openModal = () => {
      setShowModal(prev => !prev);
    }

  return(
    <>
      <EditButton onClick={openModal}>Alterar</EditButton>
      <Modal showModal={showModal} setShowModal={setShowModal} modifiedUser={modifiedUser} setModifiedUser={setModifiedUser} propType={propType} ></Modal>    
    </>

  )
}

export default EditInfo;