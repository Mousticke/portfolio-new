import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { themeDark, GlobalStyle } from '@styles'
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

function App() {
  const stored = localStorage.getItem('isDarkMode')
  const [isDarkMode] = useState(stored === 'true')
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
    <ThemeProvider theme={isDarkMode ? themeDark : themeDark}>
      <Helmet>
        <body className={isDarkMode ? 'dark-mode' : 'dark-mode'} />
      </Helmet>
      <Container className='App'>
        <SEO />
        <GlobalStyle />
        <Navbar isTop={isTop} />
        <Wrapper theme={isDarkMode ? themeDark : themeDark} id='wrapper'>
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
        </Wrapper>
        <Footer id='contact' />
      </Container>
    </ThemeProvider>
  )
}

export default App
