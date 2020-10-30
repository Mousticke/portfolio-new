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

const StyledAboutDescription = styled.div`
  grid-area: description;
  font-size: 1rem;
  word-break: keep-all;
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

const StyledAboutHeroContainer = styled.div`
  position: relative;
  display: block;
  transition: ${transitionAll};
  box-shadow: 0px 0px 16px 2px #00e0d8;
  border-radius: 50%;
  &:hover {
    cursor pointer;
    border-radius: 50%;
    box-shadow: 0px 0px 23px 15px #00e0d8; 
    & > img{
      opacity: 0.5;
    }
    .about__img-caption{
      opacity: 1;
      color: white;
      font-weight: 700;
      font-size:1.3em;
    }
  }

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    border-radius: 50%;
    z-index: -12;
  }
`

const StyledImageCaption = styled.div`
  transition: ${transitionAll};
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 350px;
  max-height: 350px;
  border-radius: 50%;
  position: relative;
  display: block;
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
const StyledListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(160px, 200px));
  padding: 0px;
  overflow: hidden;
  list-style: none;
}
`
const StyledListItem = styled.li`
  position: relative;
  font-size: 0.9em;
  margin-bottom: 0.3em;
  padding-left: 1.2em;

  &:before {
    content: '◈';
    line-height: 2em;
    font-size: 0.8em;
    padding-right: 0.5em;
    color: ${(props) => props.theme.colors.list.puce};
  }
`

const StyledTechnologies = styled.div`
  ${breakpoints.desktop`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}
  `}
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
                I am a junior software/hardware engineer graduated in 2019 (Master of Engineering in Computing Science
                and Industrial engineering) from&nbsp;
              </span>
              <StyledAboutHighlight
                aria-label='Centrale Lille'
                href='https://centralelille.fr/'
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
            <StyledTechnologies>
              <p>Here some technologies I have already working on :</p>
              <StyledListContainer>
                <StyledListItem>React</StyledListItem>
                <StyledListItem>.NET</StyledListItem>
                <StyledListItem>C/C++</StyledListItem>
                <StyledListItem>IO-Link</StyledListItem>
                <StyledListItem>Matlab</StyledListItem>
                <StyledListItem>Embedded Systems</StyledListItem>
              </StyledListContainer>
            </StyledTechnologies>
          </StyledAboutDescription>
        </CSSTransition>
      </TransitionGroup>

      <TransitionGroup component={StyledAboutHeroWrapper}>
        <CSSTransition in={isMounted.current} classNames='fade' timeout={1000} appear unmountOnExit>
          <StyledAboutHeroContainer>
            <StyledImage src={akim2020} alt='Akim Benchiha' />
            <StyledImageCaption className='about__img-caption'>
              <p>Download Resumé</p>
            </StyledImageCaption>
          </StyledAboutHeroContainer>
        </CSSTransition>
      </TransitionGroup>
    </StyledGrid>
  )
}

export default About
