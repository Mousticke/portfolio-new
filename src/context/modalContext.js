import React, { createContext } from 'react'
import useModal from '@hooks/useModal'
import PropTypes from 'prop-types'

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal()
  return <ModalContext.Provider value={{ modal, handleModal, modalContent }}>{children}</ModalContext.Provider>
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ModalContext, ModalProvider }
