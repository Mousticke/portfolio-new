import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  visibility: visible;
`

function Experience() {
  return (
    <StyledGrid>
      <h2 className='numbered-heading'>Experience</h2>
      <p>Experience de moi</p>
    </StyledGrid>
  )
}

export default Experience
