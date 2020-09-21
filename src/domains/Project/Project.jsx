import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  visibility: visible;
`

function Project() {
  return (
    <StyledGrid>
      <h2 className='numbered-heading'>Project</h2>
      <p>Project de moi</p>
    </StyledGrid>
  )
}

export default Project
