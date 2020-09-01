import React from 'react'
import styled from 'styled-components'
import akim2020 from '@resources/akim2020.jpg'
import { breakpoints } from '@styles'

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
`

function Introduction() {
  return (
    <StyledIntro>
      <StyledCardBig>
        <StyledImage src={akim2020} alt='Akim Benchiha' />
      </StyledCardBig>
      <StyledTitles>
        <StyledGreeting>Hi there, my name is</StyledGreeting>
        <StyledHeroTitle>Akim Benchiha</StyledHeroTitle>
        <StyledHeroSubTitle>I am a software engineer</StyledHeroSubTitle>
      </StyledTitles>
      <StyledHero>
        <StyledCard>
          <StyledImage src={akim2020} alt='Akim Benchiha' />
        </StyledCard>
        <StyledSummary>
          Young engineer based in Luxembourg specializing in industrial engineering, front-end development, software
          development and project management
        </StyledSummary>
      </StyledHero>
    </StyledIntro>
  )
}

export default Introduction
