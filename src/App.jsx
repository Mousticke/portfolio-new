import React, { useState, useCallback, useEffect, useReducer, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { themeDark, themeLight, GlobalStyle, sizes, transitionSection } from '@styles'
import { SEO, Main, Modal } from '@components'
import { Navbar, Landing, About, Project, Experience, Contact, FooterContainer } from '@domains'
import { throttle, sr } from '@utils'
import scrollConfig from '@config/scrollReveal'
import { ModalProvider } from '@context/modalContext'

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
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 5rem;
  padding: 1rem;
  text-align: center;
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
  const revealContactContainer = useRef(null)

  const handleScroll = useCallback(
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
        setActiveLink('experiences')
      }
      if (
        window.scrollY >= revealProjectContainer.current.offsetTop &&
        window.scrollY <= revealProjectContainer.current.clientHeight + revealProjectContainer.current.offsetTop
      ) {
        setActiveLink('projects')
      }
      if (
        window.scrollY >= revealContactContainer.current.offsetTop &&
        window.scrollY <= revealContactContainer.current.clientHeight + revealContactContainer.current.offsetTop
      ) {
        setActiveLink('contact')
      }
      if (window.scrollY < revealAboutContainer.current.offsetTop) {
        setActiveLink('home')
      }
    }),
    [isTop]
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    sr.reveal(revealAboutContainer.current, scrollConfig())
    sr.reveal(revealExperienceContainer.current, scrollConfig())
    sr.reveal(revealProjectContainer.current, scrollConfig())
    sr.reveal(revealContactContainer.current, scrollConfig())
  }, [])

  return (
    <ThemeProvider theme={theme.isDark ? themeDark : themeLight}>
      <ModalProvider>
        <Modal />
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
              <Section Fluid Reveal id='about' ref={revealAboutContainer}>
                <About />
              </Section>
              <Section Fluid Reveal id='experience' ref={revealExperienceContainer}>
                <Experience />
              </Section>
              <Section Fluid Reveal id='projects' ref={revealProjectContainer}>
                <Project />
              </Section>
              <Section Fluid Reveal id='contact' ref={revealContactContainer}>
                <Contact />
              </Section>
            </Main>

            <Footer id='footer'>
              <FooterContainer />
            </Footer>
          </Wrapper>
        </Container>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App
