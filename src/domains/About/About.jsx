import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  visibility: visible;
`

function About() {
  return (
    <StyledGrid>
      <h2 className='numbered-heading'>About</h2>
      <p>Description de moi</p>
    </StyledGrid>
  )
}

export default About
