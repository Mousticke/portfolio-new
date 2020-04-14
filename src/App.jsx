import React, { useState, useEffect, useReducer } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { themeDark, themeLight, GlobalStyle } from '@styles'
import { SEO, Main } from '@components'
import { Navbar } from '@domains'
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
  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => {
        const topScroll = window.scrollY < 100
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
            <section
              id='home'
              style={{
                minHeight: `100vh`,
              }}
            >
              Section
            </section>
            <section
              id='about'
              style={{
                background: `#0C192A`,
                minHeight: `100vh`,
              }}
            >
              Section
            </section>
            <section
              id='experience'
              style={{
                background: `#0C192A`,
                minHeight: `100vh`,
              }}
            >
              Section
            </section>
            <section
              id='projects'
              style={{
                background: `#0C192A`,
                minHeight: `100vh`,
              }}
            >
              Section
            </section>
          </Main>
          <Footer id='contact'>Hi there</Footer>
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

export default App
