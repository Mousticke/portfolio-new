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

  .twitterButton{
    text-shadow: rgb(77,155,214) 1px 1px, rgb(77,155,214) 2px 2px, rgb(77,155,214) 3px 3px, rgb(77,155,215) 4px 4px, rgb(77,156,215) 5px 5px, rgb(77,156,215) 6px 6px, rgb(77,156,216) 7px 7px, rgb(77,156,216) 8px 8px, rgb(77,156,216) 9px 9px, rgb(78,157,217) 10px 10px, rgb(78,157,217) 11px 11px, rgb(78,157,217) 12px 12px, rgb(78,157,217) 13px 13px, rgb(78,157,218) 14px 14px, rgb(78,158,218) 15px 15px, rgb(78,158,218) 16px 16px, rgb(78,158,219) 17px 17px, rgb(78,158,219) 18px 18px, rgb(78,159,219) 19px 19px, rgb(79,159,220) 20px 20px, rgb(79,159,220) 21px 21px, rgb(79,159,220) 22px 22px, rgb(79,159,220) 23px 23px, rgb(79,160,221) 24px 24px, rgb(79,160,221) 25px 25px, rgb(79,160,221) 26px 26px, rgb(79,160,222) 27px 27px, rgb(79,160,222) 28px 28px, rgb(79,161,222) 29px 29px, rgb(80,161,223) 30px 30px, rgb(80,161,223) 31px 31px, rgb(80,161,223) 32px 32px, rgb(80,162,223) 33px 33px, rgb(80,162,224) 34px 34px, rgb(80,162,224) 35px 35px, rgb(80,162,224) 36px 36px, rgb(80,162,225) 37px 37px, rgb(80,163,225) 38px 38px, rgb(80,163,225) 39px 39px, rgb(81,163,226) 40px 40px, rgb(81,163,226) 41px 41px, rgb(81,163,226) 42px 42px, rgb(81,164,226) 43px 43px, rgb(81,164,227) 44px 44px, rgb(81,164,227) 45px 45px, rgb(81,164,227) 46px 46px, rgb(81,164,228) 47px 47px, rgb(81,165,228) 48px 48px, rgb(81,165,228) 49px 49px, rgb(82,165,229) 50px 50px, rgb(82,165,229) 51px 51px, rgb(82,166,229) 52px 52px, rgb(82,166,229) 53px 53px, rgb(82,166,230) 54px 54px, rgb(82,166,230) 55px 55px, rgb(82,166,230) 56px 56px, rgb(82,167,231) 57px 57px, rgb(82,167,231) 58px 58px, rgb(82,167,231) 59px 59px, rgb(83,167,232) 60px 60px, rgb(83,167,232) 61px 61px, rgb(83,168,232) 62px 62px, rgb(83,168,232) 63px 63px, rgb(83,168,233) 64px 64px, rgb(83,168,233) 65px 65px, rgb(83,169,233) 66px 66px, rgb(83,169,234) 67px 67px, rgb(83,169,234) 68px 68px, rgb(83,169,234) 69px 69px, rgb(84,169,235) 70px 70px, rgb(84,170,235) 71px 71px, rgb(84,170,235) 72px 72px, rgb(84,170,235) 73px 73px, rgb(84,170,236) 74px 74px, rgb(84,170,236) 75px 75px, rgb(84,171,236) 76px 76px, rgb(84,171,237) 77px 77px, rgb(84,171,237) 78px 78px, rgb(84,171,237) 79px 79px, rgb(85,172,238) 80px 80px;
  }

  .instagramButton{
    text-shadow: rgb(230,23,116) 1px 1px, rgb(230,23,116) 2px 2px, rgb(230,23,116) 3px 3px, rgb(231,23,116) 4px 4px, rgb(231,23,116) 5px 5px, rgb(231,23,116) 6px 6px, rgb(232,23,117) 7px 7px, rgb(232,23,117) 8px 8px, rgb(232,23,117) 9px 9px, rgb(233,23,117) 10px 10px, rgb(233,23,117) 11px 11px, rgb(233,23,117) 12px 12px, rgb(234,23,118) 13px 13px, rgb(234,23,118) 14px 14px, rgb(234,23,118) 15px 15px, rgb(235,23,118) 16px 16px, rgb(235,23,118) 17px 17px, rgb(235,23,118) 18px 18px, rgb(235,23,119) 19px 19px, rgb(236,23,119) 20px 20px, rgb(236,23,119) 21px 21px, rgb(236,23,119) 22px 22px, rgb(237,23,119) 23px 23px, rgb(237,23,119) 24px 24px, rgb(237,23,120) 25px 25px, rgb(238,23,120) 26px 26px, rgb(238,23,120) 27px 27px, rgb(238,23,120) 28px 28px, rgb(239,23,120) 29px 29px, rgb(239,23,120) 30px 30px, rgb(239,23,121) 31px 31px, rgb(240,23,121) 32px 32px, rgb(240,23,121) 33px 33px, rgb(240,23,121) 34px 34px, rgb(240,23,121) 35px 35px, rgb(241,23,121) 36px 36px, rgb(241,23,122) 37px 37px, rgb(241,23,122) 38px 38px, rgb(242,23,122) 39px 39px, rgb(242,24,122) 40px 40px, rgb(242,24,122) 41px 41px, rgb(243,24,122) 42px 42px, rgb(243,24,122) 43px 43px, rgb(243,24,123) 44px 44px, rgb(244,24,123) 45px 45px, rgb(244,24,123) 46px 46px, rgb(244,24,123) 47px 47px, rgb(245,24,123) 48px 48px, rgb(245,24,123) 49px 49px, rgb(245,24,124) 50px 50px, rgb(245,24,124) 51px 51px, rgb(246,24,124) 52px 52px, rgb(246,24,124) 53px 53px, rgb(246,24,124) 54px 54px, rgb(247,24,124) 55px 55px, rgb(247,24,125) 56px 56px, rgb(247,24,125) 57px 57px, rgb(248,24,125) 58px 58px, rgb(248,24,125) 59px 59px, rgb(248,24,125) 60px 60px, rgb(249,24,125) 61px 61px, rgb(249,24,126) 62px 62px, rgb(249,24,126) 63px 63px, rgb(250,24,126) 64px 64px, rgb(250,24,126) 65px 65px, rgb(250,24,126) 66px 66px, rgb(250,24,126) 67px 67px, rgb(251,24,127) 68px 68px, rgb(251,24,127) 69px 69px, rgb(251,24,127) 70px 70px, rgb(252,24,127) 71px 71px, rgb(252,24,127) 72px 72px, rgb(252,24,127) 73px 73px, rgb(253,24,128) 74px 74px, rgb(253,24,128) 75px 75px, rgb(253,24,128) 76px 76px, rgb(254,24,128) 77px 77px, rgb(254,24,128) 78px 78px, rgb(254,24,128) 79px 79px, rgb(255,25,129) 80px 80px;
  }

  .facebookButton{
    text-shadow:rgb(57,120,220) 1px 1px, rgb(57,120,220) 2px 2px, rgb(57,120,220) 3px 3px, rgb(57,120,221) 4px 4px, rgb(57,120,221) 5px 5px, rgb(57,120,221) 6px 6px, rgb(57,121,222) 7px 7px, rgb(57,121,222) 8px 8px, rgb(57,121,222) 9px 9px, rgb(57,121,223) 10px 10px, rgb(57,121,223) 11px 11px, rgb(57,121,223) 12px 12px, rgb(57,122,223) 13px 13px, rgb(58,122,224) 14px 14px, rgb(58,122,224) 15px 15px, rgb(58,122,224) 16px 16px, rgb(58,122,225) 17px 17px, rgb(58,122,225) 18px 18px, rgb(58,123,225) 19px 19px, rgb(58,123,226) 20px 20px, rgb(58,123,226) 21px 21px, rgb(58,123,226) 22px 22px, rgb(58,123,226) 23px 23px, rgb(58,123,227) 24px 24px, rgb(58,124,227) 25px 25px, rgb(58,124,227) 26px 26px, rgb(59,124,228) 27px 27px, rgb(59,124,228) 28px 28px, rgb(59,124,228) 29px 29px, rgb(59,124,229) 30px 30px, rgb(59,125,229) 31px 31px, rgb(59,125,229) 32px 32px, rgb(59,125,229) 33px 33px, rgb(59,125,230) 34px 34px, rgb(59,125,230) 35px 35px, rgb(59,125,230) 36px 36px, rgb(59,126,231) 37px 37px, rgb(59,126,231) 38px 38px, rgb(59,126,231) 39px 39px, rgb(60,126,232) 40px 40px, rgb(60,126,232) 41px 41px, rgb(60,126,232) 42px 42px, rgb(60,126,232) 43px 43px, rgb(60,127,233) 44px 44px, rgb(60,127,233) 45px 45px, rgb(60,127,233) 46px 46px, rgb(60,127,234) 47px 47px, rgb(60,127,234) 48px 48px, rgb(60,127,234) 49px 49px, rgb(60,128,235) 50px 50px, rgb(60,128,235) 51px 51px, rgb(60,128,235) 52px 52px, rgb(60,128,235) 53px 53px, rgb(61,128,236) 54px 54px, rgb(61,128,236) 55px 55px, rgb(61,129,236) 56px 56px, rgb(61,129,237) 57px 57px, rgb(61,129,237) 58px 58px, rgb(61,129,237) 59px 59px, rgb(61,129,238) 60px 60px, rgb(61,129,238) 61px 61px, rgb(61,130,238) 62px 62px, rgb(61,130,238) 63px 63px, rgb(61,130,239) 64px 64px, rgb(61,130,239) 65px 65px, rgb(61,130,239) 66px 66px, rgb(62,130,240) 67px 67px, rgb(62,131,240) 68px 68px, rgb(62,131,240) 69px 69px, rgb(62,131,241) 70px 70px, rgb(62,131,241) 71px 71px, rgb(62,131,241) 72px 72px, rgb(62,131,241) 73px 73px, rgb(62,132,242) 74px 74px, rgb(62,132,242) 75px 75px, rgb(62,132,242) 76px 76px, rgb(62,132,243) 77px 77px, rgb(62,132,243) 78px 78px, rgb(62,132,243) 79px 79px, rgb(63,133,244) 80px 80px;
  }

  .githubButton{
    text-shadow:rgb(61,61,61) 1px 1px, rgb(61,61,61) 2px 2px, rgb(61,61,61) 3px 3px, rgb(61,61,61) 4px 4px, rgb(61,61,61) 5px 5px, rgb(61,61,61) 6px 6px, rgb(61,61,61) 7px 7px, rgb(61,61,61) 8px 8px, rgb(61,61,61) 9px 9px, rgb(61,61,61) 10px 10px, rgb(61,61,61) 11px 11px, rgb(62,62,62) 12px 12px, rgb(62,62,62) 13px 13px, rgb(62,62,62) 14px 14px, rgb(62,62,62) 15px 15px, rgb(62,62,62) 16px 16px, rgb(62,62,62) 17px 17px, rgb(62,62,62) 18px 18px, rgb(62,62,62) 19px 19px, rgb(62,62,62) 20px 20px, rgb(62,62,62) 21px 21px, rgb(62,62,62) 22px 22px, rgb(63,63,63) 23px 23px, rgb(63,63,63) 24px 24px, rgb(63,63,63) 25px 25px, rgb(63,63,63) 26px 26px, rgb(63,63,63) 27px 27px, rgb(63,63,63) 28px 28px, rgb(63,63,63) 29px 29px, rgb(63,63,63) 30px 30px, rgb(63,63,63) 31px 31px, rgb(63,63,63) 32px 32px, rgb(63,63,63) 33px 33px, rgb(63,63,63) 34px 34px, rgb(64,64,64) 35px 35px, rgb(64,64,64) 36px 36px, rgb(64,64,64) 37px 37px, rgb(64,64,64) 38px 38px, rgb(64,64,64) 39px 39px, rgb(64,64,64) 40px 40px, rgb(64,64,64) 41px 41px, rgb(64,64,64) 42px 42px, rgb(64,64,64) 43px 43px, rgb(64,64,64) 44px 44px, rgb(64,64,64) 45px 45px, rgb(65,65,65) 46px 46px, rgb(65,65,65) 47px 47px, rgb(65,65,65) 48px 48px, rgb(65,65,65) 49px 49px, rgb(65,65,65) 50px 50px, rgb(65,65,65) 51px 51px, rgb(65,65,65) 52px 52px, rgb(65,65,65) 53px 53px, rgb(65,65,65) 54px 54px, rgb(65,65,65) 55px 55px, rgb(65,65,65) 56px 56px, rgb(65,65,65) 57px 57px, rgb(66,66,66) 58px 58px, rgb(66,66,66) 59px 59px, rgb(66,66,66) 60px 60px, rgb(66,66,66) 61px 61px, rgb(66,66,66) 62px 62px, rgb(66,66,66) 63px 63px, rgb(66,66,66) 64px 64px, rgb(66,66,66) 65px 65px, rgb(66,66,66) 66px 66px, rgb(66,66,66) 67px 67px, rgb(66,66,66) 68px 68px, rgb(67,67,67) 69px 69px, rgb(67,67,67) 70px 70px, rgb(67,67,67) 71px 71px, rgb(67,67,67) 72px 72px, rgb(67,67,67) 73px 73px, rgb(67,67,67) 74px 74px, rgb(67,67,67) 75px 75px, rgb(67,67,67) 76px 76px, rgb(67,67,67) 77px 77px, rgb(67,67,67) 78px 78px, rgb(67,67,67) 79px 79px, rgb(68,68,68) 80px 80px;
  }

  .linkedInButton{
    text-shadow:rgb(1,107,163) 1px 1px, rgb(1,107,163) 2px 2px, rgb(1,107,163) 3px 3px, rgb(1,107,163) 4px 4px, rgb(1,107,164) 5px 5px, rgb(1,107,164) 6px 6px, rgb(1,108,164) 7px 7px, rgb(1,108,164) 8px 8px, rgb(1,108,165) 9px 9px, rgb(1,108,165) 10px 10px, rgb(1,108,165) 11px 11px, rgb(1,108,165) 12px 12px, rgb(1,108,165) 13px 13px, rgb(1,109,166) 14px 14px, rgb(1,109,166) 15px 15px, rgb(1,109,166) 16px 16px, rgb(1,109,166) 17px 17px, rgb(1,109,167) 18px 18px, rgb(1,109,167) 19px 19px, rgb(1,110,167) 20px 20px, rgb(1,110,167) 21px 21px, rgb(1,110,167) 22px 22px, rgb(1,110,168) 23px 23px, rgb(1,110,168) 24px 24px, rgb(1,110,168) 25px 25px, rgb(1,110,168) 26px 26px, rgb(1,111,169) 27px 27px, rgb(1,111,169) 28px 28px, rgb(1,111,169) 29px 29px, rgb(1,111,169) 30px 30px, rgb(1,111,169) 31px 31px, rgb(1,111,170) 32px 32px, rgb(1,111,170) 33px 33px, rgb(1,112,170) 34px 34px, rgb(1,112,170) 35px 35px, rgb(1,112,171) 36px 36px, rgb(1,112,171) 37px 37px, rgb(1,112,171) 38px 38px, rgb(1,112,171) 39px 39px, rgb(1,113,172) 40px 40px, rgb(1,113,172) 41px 41px, rgb(1,113,172) 42px 42px, rgb(1,113,172) 43px 43px, rgb(1,113,172) 44px 44px, rgb(1,113,173) 45px 45px, rgb(1,113,173) 46px 46px, rgb(1,114,173) 47px 47px, rgb(1,114,173) 48px 48px, rgb(1,114,174) 49px 49px, rgb(1,114,174) 50px 50px, rgb(1,114,174) 51px 51px, rgb(1,114,174) 52px 52px, rgb(1,114,174) 53px 53px, rgb(1,115,175) 54px 54px, rgb(1,115,175) 55px 55px, rgb(1,115,175) 56px 56px, rgb(1,115,175) 57px 57px, rgb(1,115,176) 58px 58px, rgb(1,115,176) 59px 59px, rgb(1,116,176) 60px 60px, rgb(1,116,176) 61px 61px, rgb(1,116,176) 62px 62px, rgb(1,116,177) 63px 63px, rgb(1,116,177) 64px 64px, rgb(1,116,177) 65px 65px, rgb(1,116,177) 66px 66px, rgb(1,117,178) 67px 67px, rgb(1,117,178) 68px 68px, rgb(1,117,178) 69px 69px, rgb(1,117,178) 70px 70px, rgb(1,117,178) 71px 71px, rgb(1,117,179) 72px 72px, rgb(1,117,179) 73px 73px, rgb(1,118,179) 74px 74px, rgb(1,118,179) 75px 75px, rgb(1,118,180) 76px 76px, rgb(1,118,180) 77px 77px, rgb(1,118,180) 78px 78px, rgb(1,118,180) 79px 79px, rgb(1,119,181) 80px 80px;
  }

  .stackOverflowButton{
    text-shadow:rgb(230,70,0) 1px 1px, rgb(230,70,0) 2px 2px, rgb(230,70,0) 3px 3px, rgb(231,70,0) 4px 4px, rgb(231,70,0) 5px 5px, rgb(231,70,0) 6px 6px, rgb(232,70,0) 7px 7px, rgb(232,70,0) 8px 8px, rgb(232,70,0) 9px 9px, rgb(233,71,0) 10px 10px, rgb(233,71,0) 11px 11px, rgb(233,71,0) 12px 12px, rgb(234,71,0) 13px 13px, rgb(234,71,0) 14px 14px, rgb(234,71,0) 15px 15px, rgb(235,71,0) 16px 16px, rgb(235,71,0) 17px 17px, rgb(235,71,0) 18px 18px, rgb(235,71,0) 19px 19px, rgb(236,72,0) 20px 20px, rgb(236,72,0) 21px 21px, rgb(236,72,0) 22px 22px, rgb(237,72,0) 23px 23px, rgb(237,72,0) 24px 24px, rgb(237,72,0) 25px 25px, rgb(238,72,0) 26px 26px, rgb(238,72,0) 27px 27px, rgb(238,72,0) 28px 28px, rgb(239,72,0) 29px 29px, rgb(239,73,0) 30px 30px, rgb(239,73,0) 31px 31px, rgb(240,73,0) 32px 32px, rgb(240,73,0) 33px 33px, rgb(240,73,0) 34px 34px, rgb(240,73,0) 35px 35px, rgb(241,73,0) 36px 36px, rgb(241,73,0) 37px 37px, rgb(241,73,0) 38px 38px, rgb(242,73,0) 39px 39px, rgb(242,74,0) 40px 40px, rgb(242,74,0) 41px 41px, rgb(243,74,0) 42px 42px, rgb(243,74,0) 43px 43px, rgb(243,74,0) 44px 44px, rgb(244,74,0) 45px 45px, rgb(244,74,0) 46px 46px, rgb(244,74,0) 47px 47px, rgb(245,74,0) 48px 48px, rgb(245,74,0) 49px 49px, rgb(245,75,0) 50px 50px, rgb(245,75,0) 51px 51px, rgb(246,75,0) 52px 52px, rgb(246,75,0) 53px 53px, rgb(246,75,0) 54px 54px, rgb(247,75,0) 55px 55px, rgb(247,75,0) 56px 56px, rgb(247,75,0) 57px 57px, rgb(248,75,0) 58px 58px, rgb(248,75,0) 59px 59px, rgb(248,76,0) 60px 60px, rgb(249,76,0) 61px 61px, rgb(249,76,0) 62px 62px, rgb(249,76,0) 63px 63px, rgb(250,76,0) 64px 64px, rgb(250,76,0) 65px 65px, rgb(250,76,0) 66px 66px, rgb(250,76,0) 67px 67px, rgb(251,76,0) 68px 68px, rgb(251,76,0) 69px 69px, rgb(251,77,0) 70px 70px, rgb(252,77,0) 71px 71px, rgb(252,77,0) 72px 72px, rgb(252,77,0) 73px 73px, rgb(253,77,0) 74px 74px, rgb(253,77,0) 75px 75px, rgb(253,77,0) 76px 76px, rgb(254,77,0) 77px 77px, rgb(254,77,0) 78px 78px, rgb(254,77,0) 79px 79px, rgb(255,78,0) 80px 80px;
  }

  ${transition};
`

export default GlobalStyle
