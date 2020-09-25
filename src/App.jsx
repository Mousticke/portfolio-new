import React, { useState, useEffect, useReducer, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { themeDark, themeLight, GlobalStyle, sizes, transitionSection } from '@styles'
import { SEO, Main } from '@components'
import { Navbar, Landing, About, Project, Experience } from '@domains'
import { throttle, sr } from '@utils'
import scrollConfig from '@config/scrollReveal'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  grid-area: main;
  background: ${(props) => props.theme.colors.background.landing};
  flex: 0 0 100%;
`
const Footer = styled.footer`
  grid-area: footer;
  background: red;
  flex: 0 0 100%;
  height: 3rem;
`

const Section = styled.section`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.theme.colors.text.default};
  padding: 5rem 0;
  min-height: ${(props) => (props.Fluid ? '100vh' : 'none')};
  max-width: 1000px;
  transition: ${(props) => (props.Reveal ? `${transitionSection}` : 'none')};
`

const initialState = {
  isDark: localStorage.getItem('isDarkMode') === 'true',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'DARK':
      localStorage.setItem('isDarkMode', action.payload)
      return {
        ...initialState,
        isDark: action.payload,
      }
    case 'LIGHT':
      localStorage.setItem('isDarkMode', action.payload)
      return {
        ...initialState,
        isDark: action.payload,
      }
    default:
      return initialState
  }
}
export const ThemeContext = React.createContext(null)

function App() {
  const [theme, dispatch] = useReducer(reducer, initialState)
  const [isTop, setIsTop] = useState(true)
  const [activeLink, setActiveLink] = useState('home')
  const revealAboutContainer = useRef(null)
  const revealExperienceContainer = useRef(null)
  const revealProjectContainer = useRef(null)

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => {
        const topScroll = window.scrollY < 100 && window.innerWidth <= sizes.tablet.max
        if (topScroll !== isTop) {
          setIsTop(topScroll)
        }
        if (
          window.scrollY >= revealAboutContainer.current.offsetTop &&
          window.scrollY <= revealAboutContainer.current.offsetTop + revealAboutContainer.current.clientHeight
        ) {
          setActiveLink('about')
        }
        if (
          window.scrollY >= revealExperienceContainer.current.offsetTop &&
          window.scrollY <= revealExperienceContainer.current.clientHeight + revealExperienceContainer.current.offsetTop
        ) {
          setActiveLink('experience')
        }
        if (
          window.scrollY >= revealProjectContainer.current.offsetTop &&
          window.scrollY <= revealProjectContainer.current.clientHeight + revealProjectContainer.current.offsetTop
        ) {
          setActiveLink('projects')
        }
        if (window.scrollY < revealAboutContainer.current.offsetTop) {
          setActiveLink('home')
        }
      })
    )
  }, [isTop, activeLink])

  useEffect(() => {
    sr.reveal(revealAboutContainer.current, scrollConfig())
    sr.reveal(revealExperienceContainer.current, scrollConfig())
    sr.reveal(revealProjectContainer.current, scrollConfig())
  }, [])

  return (
    <ThemeProvider theme={theme.isDark ? themeDark : themeLight}>
      <Helmet>
        <body data-theme={theme.isDark ? 'dark-mode' : 'light-mode'} />
      </Helmet>
      <Container className='App'>
        <SEO />
        <GlobalStyle />
        <ThemeContext.Provider value={{ theme, dispatch }}>
          <Navbar isTop={isTop} activeLink={activeLink} />
        </ThemeContext.Provider>
        <Wrapper theme={theme.isDark ? themeDark : themeLight} id='wrapper'>
          <Main>
            <Section Fluid id='home'>
              <Landing />
            </Section>
            <Section style={{ height: '100vh' }} Reveal id='about' ref={revealAboutContainer}>
              <About />
            </Section>
            <Section style={{ height: '100vh' }} Reveal id='experience' ref={revealExperienceContainer}>
              <Experience />
            </Section>
            <Section style={{ height: '100vh' }} Reveal id='projects' ref={revealProjectContainer}>
              <Project />
            </Section>
          </Main>
          <Footer id='contact'>Hi there</Footer>
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

export default App
