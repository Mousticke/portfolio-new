import React, { createContext } from 'react'
import useModal from '@hooks/useModal'

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal()
  return <ModalContext.Provider value={{ modal, handleModal, modalContent }}>{children}</ModalContext.Provider>
}

export { ModalContext, ModalProvider }
