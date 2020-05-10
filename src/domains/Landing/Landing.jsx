import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    'card card'
    'intro typist'
    'citation citation';
  justify-content: center;
`
const StyledCard = styled.div`
  grid-area: card;
`
const StyledIntro = styled.div`
  grid-area: intro;
`

const StyledTypist = styled.div`
  grid-area: typist;
`
const StyledCitation = styled.div`
  grid-area: citation;
  blockquote {
    text-align: center;
  }
  p {
    font-size: 0.9rem;
    margin-top: 0;
    margin-bottom: 1rem;
    font-style: italic;
    &:before {
      content: open-quote;
    }
    &:after {
      content: close-quote;
    }
  }
  footer {
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.text.quote_author};
    &:before {
      content: '\2014\00A0';
    }
  }
`

function Landing() {
  return (
    <StyledGrid>
      <StyledCard>Card here</StyledCard>
      <StyledIntro>
        <h6>Hi there, my name is</h6>
        <h1>Akim Benchiha</h1>
        <h2>I am a software engineer</h2>
        <p>
          Young engineer based in Luxembourg specializing in industrial engineering, front-end development, software
          development and project management
        </p>
      </StyledIntro>
      <StyledTypist>Typist here</StyledTypist>
      <StyledCitation>
        <blockquote>
          <p>
            If debugging is the process of removing software bugs, then programming must be the process of putting them
            in.
          </p>
          <footer>Edsger W. Dijkstra</footer>
        </blockquote>
      </StyledCitation>
    </StyledGrid>
  )
}

export default Landing
