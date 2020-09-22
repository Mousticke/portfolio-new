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
    /* Prevents iOS text size adjust after orientation change, without disabling user zoom */
    -webkit-text-size-adjust: ${fonts.size.root_giant}; 
    -ms-text-size-adjust: ${fonts.size.root_giant}; 
    ${breakpoints.giant`font-size: ${fonts.size.root_giant}; -webkit-text-size-adjust: ${fonts.size.root_giant}; 
    -ms-text-size-adjust: ${fonts.size.root_giant}; `};
    ${breakpoints.bigDesktop`font-size: ${fonts.size.root_bigDesktop}; -webkit-text-size-adjust: ${fonts.size.root_bigDesktop}; 
    -ms-text-size-adjust: ${fonts.size.root_bigDesktop}; `};
    ${breakpoints.desktop`font-size: ${fonts.size.root}; -webkit-text-size-adjust: ${fonts.size.root}; 
    -ms-text-size-adjust: ${fonts.size.root}; `};
    ${breakpoints.phablet`font-size: ${fonts.size.root_small}; -webkit-text-size-adjust: ${fonts.size.root_small}; 
    -ms-text-size-adjust: ${fonts.size.root_small}; `};
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
  
  body[data-theme='dark-mode']{
      background-color:${themeDark.colors.background.default}
  }

  body[data-theme='light-mode']{
    background-color:${themeLight.colors.background.default}
  }

  button{
    &:focus{
      outline:none;
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
    grid-template-rows: auto 1fr;
    grid-template-columns: 12rem auto ;
    grid-template-areas: 
      "header main"
      "header main"
      "header footer";
    ${breakpoints.tablet`
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
    grid-template-areas: 
      "header"
      "main"
      "footer";
    `}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${fonts.weight.headers};
    margin: 0.7rem 0;
    line-height: 1.1;
    font-weight: 600;
  }

  h1{
    font-size: 2.5em;
  }
  h2{
    font-size: 2em;
  }
  h3{
    font-size: 1.75em;
  }
  h4{
    font-size: 1.5em;
  }
  h5{
    font-size: 1.25em;
  }
  h6{
    font-size: 1em;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
    &:not(:root) {
      overflow: hidden;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${transitionAll};
    cursor: pointer;
    &:hover, &:active{
      outline:0
    }
  }

  img {
    border: 0; /* Removes border when inside 'a' element in IE6/7/8/9 */
    -ms-interpolation-mode: bicubic; /* Improves image quality when scaled in IE7 */
  }


  .boxButton{
    margin-top: 1rem;
    margin-right: 1rem;
    padding: 1rem 1.8rem;
    line-height: 1;
    border-radius: 3px;
    font-size: 0.8rem;
    color: ${themeDark.colors.button.text};
    background-color: ${themeDark.colors.button.inner};
    border: 1px solid ${themeDark.colors.button.border};
    transition: ${transitionAll};

    &:hover {
      cursor: pointer;
      background-color: ${themeDark.colors.button.hover};
    }
  }

  .numbered-heading::before {
    position: relative;
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: ${themeDark.colors.text.section_number};
    font-weight: 400;
    

  }

  .numbered-heading{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    white-space: nowrap;
    font-family: 'Inconsolata';
  }

  .numbered-heading::after {
    width: 300px;
    content: "";
    display: block;
    position: relative;
    height: 1px;
    margin-left: 20px;
    background-color: ${themeDark.colors.general.header_section_line}
  }

  .facebookButton:hover:before{
    box-shadow: 0 0 15px ${themeDark.colors.constant.facebookButton};
  }

  .facebookButton:hover{
    svg{
      fill: ${themeDark.colors.constant.facebookButton};
    } 
    box-shadow: 0 0 15px ${themeDark.colors.constant.facebookButton};
    text-shadow: 0 0 15px ${themeDark.colors.constant.facebookButton};
  }

  .facebookButton:before{
    background-color:${themeDark.colors.constant.facebookButton}
  }

  .twitterButton:hover:before{
    box-shadow: 0 0 15px ${themeDark.colors.constant.twitterButton};
  }

  .twitterButton:hover{
    svg{
      fill: ${themeDark.colors.constant.twitterButton};
    } 
    box-shadow: 0 0 15px ${themeDark.colors.constant.twitterButton};
    text-shadow: 0 0 15px ${themeDark.colors.constant.twitterButton};
  }

  .twitterButton:before{
    background-color:${themeDark.colors.constant.twitterButton}
  }

  .instagramButton:hover:before{
    box-shadow: 0 0 15px ${themeDark.colors.constant.instagramButton};
  }

  .instagramButton:hover{
    svg{
      fill: ${themeDark.colors.constant.instagramButton};
    } 
    box-shadow: 0 0 15px ${themeDark.colors.constant.instagramButton};
    text-shadow: 0 0 15px ${themeDark.colors.constant.instagramButton};
  }

  .instagramButton:before{
    background-color:${themeDark.colors.constant.instagramButton}
  }



  .githubButton:hover:before{
    box-shadow: 0 0 15px ${themeDark.colors.constant.githubButton};
  }

  .githubButton:hover{
    svg{
      fill: ${themeDark.colors.constant.githubButton};
    } 
    box-shadow: 0 0 15px ${themeDark.colors.constant.githubButton};
    text-shadow: 0 0 15px ${themeDark.colors.constant.githubButton};
  }

  .githubButton:before{
    background-color:${themeDark.colors.constant.githubButton}
  }


  .linkedInButton:hover:before{
    box-shadow: 0 0 15px ${themeDark.colors.constant.linkedInButton};
  }

  .linkedInButton:hover{
    svg{
      fill: ${themeDark.colors.constant.linkedInButton};
    } 
    box-shadow: 0 0 15px ${themeDark.colors.constant.linkedInButton};
    text-shadow: 0 0 15px ${themeDark.colors.constant.linkedInButton};
  }

  .linkedInButton:before{
    background-color:${themeDark.colors.constant.linkedInButton}
  }

  .stackOverflowButton:hover:before{
    box-shadow: 0 0 15px ${themeDark.colors.constant.linkedInButton};
  }

  .stackOverflowButton:hover{
    svg{
      fill: ${themeDark.colors.constant.stackOverflowButton};
    } 
    box-shadow: 0 0 15px ${themeDark.colors.constant.stackOverflowButton};
    text-shadow: 0 0 15px ${themeDark.colors.constant.stackOverflowButton};
  }

  .stackOverflowButton:before{
    background-color:${themeDark.colors.constant.stackOverflowButton}
  }

  ${transition};
`

export default GlobalStyle
