import { createGlobalStyle } from 'styled-components'
import transition, { transitionAll } from './transition'
import fonts from './font'
import { themeDark, themeLight } from './theme'
import { breakpoints } from './breakpoints'

const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    width: 100%;
    font-size: ${fonts.size.root_giant};
    ${breakpoints.giant`font-size: ${fonts.size.root_giant};`};
    ${breakpoints.bigDesktop`font-size: ${fonts.size.root_bigDesktop};`};
    ${breakpoints.desktop`font-size: ${fonts.size.root};`};
    ${breakpoints.tablet`font-size: ${fonts.size.root_small};`};
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body{
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: ${fonts.line_height};
    font-family: ${fonts.style.sans_serif};
    
    &.dark-mode{
      background-color:${themeDark.colors.background.default}
    }

    &.light-mode{
      background-color:${themeLight.colors.background.default}
    }
    &.blur {
      overflow: hidden;
      .App > #wrapper > * {
        filter: blur(5px) brightness(0.7);
        transition: ${transitionAll};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  nav{
    font-family: ${fonts.style.navbar};

    & > #logo{
      grid-column: 1 / 2
    }
  }

  .App {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr . 1fr;
    grid-template-columns: 100%;
    grid-template-areas: 
      "header"
      "main"
      "footer"
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${fonts.weight.headers};
    margin: 0 0 10px 0;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${transitionAll};
    cursor: pointer;
  }

  

  ${transition};
`

export default GlobalStyle
