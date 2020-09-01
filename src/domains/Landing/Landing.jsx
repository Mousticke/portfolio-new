import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '@styles'
import Introduction from './Introduction'
import TypistIntro from './Typist'
import Citation from './Citation'

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: minmax(0, 1fr) minmax(0, 100px);
  grid-template-columns: minmax(0, 50%) minmax(0, 50%);
  grid-template-areas:
    'intro typist'
    'citation citation';
  justify-content: center;
  align-self: center;
  grid-gap: 1rem;
  ${breakpoints.desktop`
  grid-template-rows: minmax(0, 1fr) minmax(0, auto) minmax(0, auto);
  grid-template-areas:
    "intro intro"
    "typist typist"
    "citation citation";
  `};
`

function Landing() {
  return (
    <StyledGrid>
      <Introduction />
      <TypistIntro />
      <Citation />
    </StyledGrid>
  )
}

export default Landing
