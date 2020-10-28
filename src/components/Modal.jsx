import React, { useContext } from 'react'
import { ModalContext } from '@context/modalContext'
import { transitionAll } from '@styles'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 12;
  outline: 0;
  transition: ${transitionAll};
  transform: translateX(${(props) => (props.modal ? 0 : 100)}vw);
  visibility: ${(props) => (props.modal ? 'visible' : 'hidden')};
  display: block;
`

const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-areas:
    'close'
    'mapContent';
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.navbar.aside};
  width: 100vw;
  position: relative;
  right: 0;
  margin-left: auto;
  box-shadow: 16px 0px 30px -17px ${(props) => props.theme.colors.navbar.box_shadow};
`

const ModalCloseButton = styled.button`
  display: flex;
  justify-self: flex-end;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${(props) => props.theme.colors.button.text};
  border: none;
  font-size: 2em;
  transition: ${transitionAll};

  &:hover {
    background-color: ${(props) => props.theme.colors.button.hover};
    cursor: pointer;
  }
`

const ModalContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 10;
`

const Modal = () => {
  const { modalContent, handleModal, modal } = useContext(ModalContext)
  if (modal) {
    return (
      <ModalContainer modal={modal} aria-hidden={!modal}>
        <Helmet>
          <body className={modal ? 'blur' : ''} />
        </Helmet>
        <ModalGrid>
          <ModalCloseButton onClick={handleModal} type='button' aria-label='Modal'>
            {' '}
            &times;
          </ModalCloseButton>
          <ModalContent
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              zIndex: '10',
            }}
          >
            {modalContent}
          </ModalContent>
        </ModalGrid>
      </ModalContainer>
    )
  }
  return null
}

export default Modal
