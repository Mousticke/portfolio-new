const { override, addWebpackAlias } = require('customize-cra')

const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve('./src/components'),
    '@styles': path.resolve('./src/styles'),
    '@hooks': path.resolve('./src/hooks'),
    '@pages': path.resolve('./src/pages'),
    '@config': path.resolve('./src/config'),
    '@resources': path.resolve('./src/resources'),
    '@utils': path.resolve('./src/utils'),
    '@domains': path.resolve('./src/domains'),
  })
)
