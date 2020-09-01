import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { breakpoints } from '@styles'

const MainContainer = styled.main`
  min-height: 100vh;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  counter-reset: section 0;
  padding: 0 4rem;
  ${breakpoints.phone`
  padding: 0 2.5rem;`};
  ${breakpoints.tablet`
  padding: 0 3rem;`};
`

function Main({ children }) {
  return <MainContainer>{children}</MainContainer>
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
