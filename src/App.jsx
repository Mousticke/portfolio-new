import React, { useState, useEffect, useReducer, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { themeDark, themeLight, GlobalStyle, sizes } from '@styles'
import { SEO, Main } from '@components'
import { Navbar, Landing } from '@domains'
import { throttle } from '@utils'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  min-height: 100vh;
  color: ${(props) => props.theme.colors.text.default};
  padding: 5rem 0;
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
  // const [projectSection, setProjectSection] = useState(true)
  const sectionRefProject = useRef(null)
  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => {
        const topScroll = window.scrollY < 100 && window.innerWidth <= sizes.tablet.max
        /* const projectScroll =
          window.scrollY >= sectionRefProject.current.offsetTop * 0.9 &&
          window.scrollY < sectionRefProject.current.clientHeight + sectionRefProject.current.offsetTop
        setProjectSection(projectScroll) */
        if (topScroll !== isTop) {
          setIsTop(topScroll)
        }
      })
    )
  }, [isTop])

  return (
    <ThemeProvider theme={theme.isDark ? themeDark : themeLight}>
      <Helmet>
        <body data-theme={theme.isDark ? 'dark-mode' : 'light-mode'} />
      </Helmet>
      <Container className='App'>
        <SEO />
        <GlobalStyle />
        <ThemeContext.Provider value={{ theme, dispatch }}>
          <Navbar isTop={isTop} />
        </ThemeContext.Provider>
        <Wrapper theme={theme.isDark ? themeDark : themeLight} id='wrapper'>
          <Main>
            <Section id='home'>
              <Landing />
            </Section>
            <Section id='about' background>
              Section
            </Section>
            <Section id='experience' background>
              Section
            </Section>
            <Section ref={sectionRefProject} id='projects' background>
              Section
            </Section>
          </Main>
          <Footer id='contact'>Hi there</Footer>
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

export default App
