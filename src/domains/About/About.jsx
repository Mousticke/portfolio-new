import React from 'react'
import styled from 'styled-components'
import useMounted from '@hooks/useMounted'
import { breakpoints } from '@styles'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Description from './Description'
import Hero from './Hero'

const StyledGrid = styled.div`
  display: grid;
  visibility: visible;
  grid-template-rows: minmax(0, auto) minmax(0, auto);
  grid-template-columns: 3fr 2fr;
  grid-template-areas:
    'title title'
    'description hero';
  ${breakpoints.desktop`
  grid-template-rows: minmax(0, auto) minmax(0, auto) minmax(200px, 350px);
  grid-template-columns:minmax(0, auto);
  grid-template-areas:
    'title'
    'description'
    'hero';
  `}
`
const StyledAboutTitle = styled.h2`
  grid-area: title;
`

const StyledAboutHeroWrapper = styled.div`
  grid-area: hero;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${breakpoints.desktop`
  justify-content: center;
  `};
`

function About() {
  const isMounted = useMounted()
  return (
    <StyledGrid>
      <StyledAboutTitle className='numbered-heading'>About</StyledAboutTitle>

      <TransitionGroup component={null}>
        <CSSTransition in={isMounted.current} classNames='fade' timeout={1000} appear unmountOnExit>
          <Description />
        </CSSTransition>
      </TransitionGroup>

      <TransitionGroup component={StyledAboutHeroWrapper}>
        <CSSTransition in={isMounted.current} classNames='fade' timeout={1000} appear unmountOnExit>
          <Hero />
        </CSSTransition>
      </TransitionGroup>
    </StyledGrid>
  )
}

export default About
