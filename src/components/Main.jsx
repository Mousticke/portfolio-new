import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MainContainer = styled.main`
  min-height: 100vh;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  counter-reset: section 0;
`

function Main({ children }) {
  return <MainContainer>{children}</MainContainer>
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
