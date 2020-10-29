import React from 'react'
import styled from 'styled-components'
import akim2020 from '@resources/akim2020.jpg'
import useMounted from '@hooks/useMounted'
import { transitionAll, breakpoints } from '@styles'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const StyledGrid = styled.div`
  display: grid;
  visibility: visible;
  grid-template-rows: minmax(0, auto) minmax(0, auto);
  grid-template-columns: 3fr 2fr;
  grid-template-areas:
    'title title'
    'description hero';
  grid-gap: 1rem;
`
const StyledAboutTitle = styled.h2`
  grid-area: title;
`

const StyledAboutDescription = styled.div`
  grid-area: description;
  font-size: 1rem;
  word-break: keep-all;
`

const StyledAboutHero = styled.div`
  grid-area: hero;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${breakpoints.tablet`
  justify-content: center;
  `};
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 350px;
  max-height: 350px;
  border-radius: 50%;
  transition: ${transitionAll};
`

const StyledAboutHighlight = styled.a`
  color: ${(props) => props.theme.colors.link.highlight};
  transition: ${transitionAll};

  &:hover {
    font-style: italic;
    &:after {
      width: 100%;
    }
  }

  &:after {
    content: '';
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0.15em;
    background-color: ${(props) => props.theme.colors.link.underline};
    transition: ${transitionAll};
    opacity: 0.5;
  }
`

const StyledAboutHashtag = styled.a`
  background-color: ${(props) => props.theme.colors.hashtag.background};
  box-shadow: ${(props) => props.theme.colors.hashtag.boxShadow};
  color: ${(props) => props.theme.colors.hashtag.text};
  border: 1px solid transparent;
  border-radius: 2em;
  padding: 0 10px;
  display: inline;

  &:hover {
    background-color: ${(props) => props.theme.colors.hashtag.hover};
  }
`

function About() {
  const isMounted = useMounted()
  return (
    <StyledGrid>
      <StyledAboutTitle className='numbered-heading'>About</StyledAboutTitle>

      <TransitionGroup component={null}>
        <CSSTransition in={isMounted.current} classNames='fade' timeout={1000} appear unmountOnExit>
          <StyledAboutDescription>
            <p>Hello there, my name is Akim Benchiha</p>
            <div>
              <span>
                I am a junior software engineer graduated in 2019 (Master of Engineering in Computing Science and
                Industrial engineering) from&nbsp;
              </span>
              <StyledAboutHighlight
                aria-label='Centrale Lille'
                href='https://www.centralelille.fr/'
                target='_blank'
                rel='noreferrer noopener'
              >
                Centrale Lille
              </StyledAboutHighlight>
            </div>
            <div>
              <span>I am currently based in&nbsp;</span>
              <StyledAboutHighlight
                aria-label='Luxembourg'
                href='https://en.wikipedia.org/wiki/Luxembourg'
                target='_blank'
                rel='noreferrer noopener'
              >
                Luxembourg
              </StyledAboutHighlight>
              <span>&nbsp;and I work as a&nbsp;</span>
              <StyledAboutHighlight
                aria-label='Consulting Engineer'
                href='https://www.jobhero.com/job-description/examples/engineering/consultant'
                target='_blank'
                rel='noreferrer noopener'
              >
                Consulting Engineer
              </StyledAboutHighlight>
              <span>&nbsp;for&nbsp;</span>
              <StyledAboutHighlight
                aria-label='Davidson Consulting'
                href='https://www.davidson.group/'
                target='_blank'
                rel='noreferrer noopener'
              >
                Davidson
              </StyledAboutHighlight>
              <span>&nbsp;at&nbsp;</span>
              <StyledAboutHighlight
                aria-label='Spuerkeess'
                href='https://www.bcee.lu/en/private-customers/'
                target='_blank'
                rel='noreferrer noopener'
              >
                Spuerkeess
              </StyledAboutHighlight>
            </div>
            <div>
              <p>
                <span>I have always loved creating things that rely on new technologies, especially in the&nbsp;</span>
                <StyledAboutHashtag
                  aria-label='IoT'
                  href='https://github.com/topics/iot'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  #IoT
                </StyledAboutHashtag>
                <span>&nbsp;and&nbsp;</span>
                <StyledAboutHashtag
                  aria-label='Front End'
                  href='https://github.com/topics/frontend'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  #FrontEnd
                </StyledAboutHashtag>
                <span>
                  &nbsp;fields. My goal is to improve my skills and best practices. I love building web applications
                  using&nbsp;
                </span>
                <StyledAboutHashtag
                  aria-label='React'
                  href='https://github.com/topics/react'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  #React
                </StyledAboutHashtag>
                <span>&nbsp;and&nbsp;</span>
                <StyledAboutHashtag
                  aria-label='Styled Components'
                  href='https://github.com/topics/styled-components'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  #StyledComponents
                </StyledAboutHashtag>
                <span>. I also love programming using low level programming for learning purpose,&nbsp;</span>
                <StyledAboutHashtag
                  aria-label='C++'
                  href='https://github.com/topics/cpp'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  #C++
                </StyledAboutHashtag>
                <span>&nbsp;and&nbsp;</span>
                <StyledAboutHashtag
                  aria-label='.NET'
                  href='https://github.com/topics/dotnet'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  #.NET
                </StyledAboutHashtag>
              </p>
            </div>
          </StyledAboutDescription>
        </CSSTransition>
      </TransitionGroup>

      <TransitionGroup component={StyledAboutHero}>
        <CSSTransition in={isMounted.current} classNames='fade' timeout={1000} appear unmountOnExit>
          <StyledImage src={akim2020} alt='Akim Benchiha' />
        </CSSTransition>
      </TransitionGroup>
    </StyledGrid>
  )
}

export default About
