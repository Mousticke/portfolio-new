import { css } from 'styled-components'

export const sizes = {
  giant: { min: 1200.98, max: 1400 },
  bigDesktop: { min: 1000.98, max: 1200 },
  desktop: { min: 770.98, max: 1000 },
  tablet: { min: 480.98, max: 770 },
  phablet: { min: 415.98, max: 480 },
  phone: { min: 330.98, max: 415 },
  tiny: { min: 0, max: 330 },
}

// iterate through the sizes and create a media template
export const breakpoints = Object.keys(sizes).reduce((accumulator, label) => {
  // https://zellwk.com/blog/media-query-units/
  // const emSizeMin = sizes[label].min / 16
  const emSizeMax = sizes[label].max / 16
  // const emSizeMin = sizes[label].min / 16

  accumulator[label] = (...args) => {
    /* if (label === 'giant') {
      return css`
        @media (min-width: ${emSizeMin}rem) {
          ${css(...args)};
        }
      `
    } */
    return css`
      @media (max-width: ${emSizeMax}rem) {
        ${css(...args)};
      }
    `
  }

  return accumulator
}, {})
export default breakpoints
