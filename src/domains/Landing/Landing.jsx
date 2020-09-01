import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '@styles'
import useMounted from '@hooks/useMounted'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
  const isMounted = useMounted()

  return (
    <StyledGrid>
      <Introduction isMounted={isMounted.current} />

      <TypistIntro />

      <TransitionGroup component={null}>
        <CSSTransition in={isMounted.current} classNames='fade' timeout={1000} appear unmountOnExit>
          <Citation />
        </CSSTransition>
      </TransitionGroup>
    </StyledGrid>
  )
}

export default Landing
