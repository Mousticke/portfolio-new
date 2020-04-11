import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { themeDark, GlobalStyle } from '@styles'
import { SEO } from '@components'
import Navbar from './domains/Header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function App() {
  const stored = localStorage.getItem('isDarkMode')
  const [isDarkMode] = useState(stored === 'true')
  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeDark}>
      <Helmet>
        <body className={isDarkMode ? 'dark-mode' : 'dark-mode'} />
      </Helmet>
      <Container className='App'>
        <SEO />
        <GlobalStyle />
        <Navbar />
        <div
          id='wrapper'
          style={{
            background: `radial-gradient(97.14% 97.14% at 50% 2.86%, #0F1E33 0%, #03070C 98.8%)`,
            flex: `0 0 100%`,
          }}
        >
          <main
            style={{
              minHeight: `100vh`,
              marginLeft: `auto`,
              marginRight: `auto`,
            }}
          >
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
          </main>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
