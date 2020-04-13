import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { themeDark, themeLight, GlobalStyle } from '@styles'
import { SEO, Main, Switch } from '@components'
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

function App() {
  const stored = localStorage.getItem('isDarkMode')
  const [isDarkMode, setIsDarkMode] = useState(stored === 'true')
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

  const handleThemeMode = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('isDarkMode', !isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <Helmet>
        <body data-theme={isDarkMode ? 'dark-mode' : 'light-mode'} />
      </Helmet>
      <Container className='App'>
        <SEO />
        <GlobalStyle />
        <Switch themeMode={handleThemeMode} isDarkMode={isDarkMode} />
        <Navbar isTop={isTop} />
        <Wrapper theme={isDarkMode ? themeDark : themeLight} id='wrapper'>
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
