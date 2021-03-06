import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '@styles'
import useMounted from '@hooks/useMounted'
import Introduction from './Introduction'
import Citation from './Citation'
import Summary from './Summary'

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, 1fr);
  grid-template-columns: minmax(0, 260px) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  grid-template-areas:
    'intro intro intro intro'
    'summary summary summary summary'
    'citation citation citation citation';
  justify-content: center;
  align-self: center;
  grid-gap: 1rem;
  ${breakpoints.tablet`
  grid-template-columns: 100%;
  grid-template-rows: minmax(0, auto) minmax(0, auto) minmax(0, auto);
  grid-template-areas:
    "intro"
    "summary"
    "citation";
  `};
`

function Landing() {
  const isMounted = useMounted()

  return (
    <StyledGrid>
      <Introduction isMounted={isMounted.current} />
      <Summary isMounted={isMounted.current} />
      <Citation isMounted={isMounted.current} />
    </StyledGrid>
  )
}

export default Landing
