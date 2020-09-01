import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import akim2020 from '@resources/akim2020.jpg'
import { breakpoints, transitionAll } from '@styles'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const StyledIntro = styled.div`
  grid-area: intro;
  z-index: 1;
`
const StyledTitles = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledGreeting = styled.h6`
  display: flex;
  margin: 0;
  color: ${(props) => props.theme.colors.text.greeting};
  ${breakpoints.phablet`
  justify-content:center;
  `};
  transition: ${transitionAll};
`
const StyledHeroTitle = styled.h1`
  display: flex;
  font-size: 4rem;
  margin: 0;
  color: ${(props) => props.theme.colors.text.heading};
  ${breakpoints.bigDesktop`
  font-size: 3rem;
  `};
  ${breakpoints.desktop`
  font-size: 2.5rem;
  `};
  ${breakpoints.tablet`
  font-size: 2rem;
  `};
  ${breakpoints.phablet`
  font-size: 1.5rem;
  justify-content:center;
  `};
  transition: ${transitionAll};
`

const StyledHeroSubTitle = styled.h1`
  display: flex;
  font-size: 2rem;
  margin: 0;
  ${breakpoints.bigDesktop`
  font-size: 1.8rem;
  `};
  ${breakpoints.desktop`
  font-size: 1.5rem;
  `};
  ${breakpoints.tablet`
  font-size: 1.2rem;
  `};
  ${breakpoints.phablet`
  font-size: 1.1rem;
  justify-content:center;
  `};
  transition: ${transitionAll};
`

const StyledHero = styled.div`
  font-size: 0.83em;
  display: flex;
  justify-content: center;
`

const StyledSummary = styled.p`
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  transition: ${transitionAll};
`
const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  grid-area: card;
  margin: 1rem;
  ${breakpoints.phablet`
  display: none;
  `};
`

const StyledCardBig = styled.div`
  display: none;
  justify-content: center;
  grid-area: card;
  margin: 1rem;
  ${breakpoints.phablet`
  display: flex;
  `};
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 200px;
  border-radius: 50%;
  transition: ${transitionAll};
`

function Introduction({ isMounted }) {
  return (
    <StyledIntro>
      <TransitionGroup component={StyledCardBig}>
        <CSSTransition in={isMounted} classNames='fade' timeout={1000} appear unmountOnExit>
          <StyledImage src={akim2020} alt='Akim Benchiha' />
        </CSSTransition>
      </TransitionGroup>

      <TransitionGroup component={StyledTitles}>
        <CSSTransition in={isMounted} classNames='fade' timeout={1000} appear unmountOnExit>
          <StyledGreeting style={{ transitionDelay: `${100}ms` }}>Hi there, my name is</StyledGreeting>
        </CSSTransition>
        <CSSTransition in={isMounted} classNames='fade' timeout={1000} appear unmountOnExit>
          <StyledHeroTitle style={{ transitionDelay: `${150}ms` }}>Akim Benchiha</StyledHeroTitle>
        </CSSTransition>
        <CSSTransition in={isMounted} classNames='fade' timeout={1000} appear unmountOnExit>
          <StyledHeroSubTitle style={{ transitionDelay: `${180}ms` }}>I am a software engineer</StyledHeroSubTitle>
        </CSSTransition>
      </TransitionGroup>

      <StyledHero>
        <TransitionGroup component={StyledCard}>
          <CSSTransition in={isMounted} classNames='fade' timeout={1000} appear unmountOnExit>
            <StyledImage src={akim2020} alt='Akim Benchiha' />
          </CSSTransition>
        </TransitionGroup>

        <TransitionGroup component={null}>
          <CSSTransition in={isMounted} classNames='fade' timeout={1000} appear unmountOnExit>
            <StyledSummary>
              Young engineer based in Luxembourg specializing in industrial engineering, front-end development, software
              development and project management
            </StyledSummary>
          </CSSTransition>
        </TransitionGroup>
      </StyledHero>
    </StyledIntro>
  )
}

Introduction.propTypes = {
  isMounted: PropTypes.bool.isRequired,
}

export default React.memo(Introduction)
