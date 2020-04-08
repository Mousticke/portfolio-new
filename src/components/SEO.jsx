import React from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'
import metaTag from '@config/metadata'

import favicon from '@resources/favicons/favicon.ico'
import ogImage from '@resources/og.png'
import appleIcon57x57 from '@resources/favicons/apple-icon-57x57.png'
import appleIcon60x60 from '@resources/favicons/apple-icon-60x60.png'
import appleIcon72x72 from '@resources/favicons/apple-icon-72x72.png'
import appleIcon76x76 from '@resources/favicons/apple-icon-76x76.png'
import appleIcon114x114 from '@resources/favicons/apple-icon-114x114.png'
import appleIcon120x120 from '@resources/favicons/apple-icon-120x120.png'
import appleIcon144x144 from '@resources/favicons/apple-icon-144x144.png'
import appleIcon152x152 from '@resources/favicons/apple-icon-152x152.png'
import appleIcon180x180 from '@resources/favicons/apple-icon-180x180.png'
import androidIcon192x192 from '@resources/favicons/android-icon-192x192.png'
import favicon32x32 from '@resources/favicons/favicon-32x32.png'
import favicon96x96 from '@resources/favicons/favicon-96x96.png'
import favicon16x16 from '@resources/favicons/favicon-16x16.png'
import msIcon144x144 from '@resources/favicons/ms-icon-144x144.png'

const SEO = () => {
  return (
    <Helmet>
      <html lang='en' prefix='og: http://ogp.me/ns#' />
      <title itemProp='name' lang='en'>
        {_.get(metaTag, 'title', '')}
      </title>
      <link rel='shortcut icon' href={favicon} />

      <meta name='description' content={_.get(metaTag, 'description', '')} />
      <meta itemProp='image' content={`${_.get(metaTag, 'url', '')}/${ogImage}`} />
      <meta name='keywords' content={`${_.get(metaTag, 'url', '')}`} />
      <meta itemProp='name' content={_.get(metaTag, 'title', '')} />
      <meta name='theme-color' content='#000000' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={_.get(metaTag, 'url', '')} />
      <meta name='twitter:site' content={`${_.get(metaTag, 'twitter_account', '')}`} />
      <meta name='twitter:creator' content={`${_.get(metaTag, 'twitter_account', '')}`} />
      <meta name='twitter:title' content={_.get(metaTag, 'title', '')} />
      <meta name='twitter:description' content={_.get(metaTag, 'description', '')} />
      <meta name='twitter:image' content={`${_.get(metaTag, 'url', '')}/${ogImage}`} />
      <meta name='twitter:image:alt' content={_.get(metaTag, 'title', '')} />

      <meta property='og:description' content={_.get(metaTag, 'description', '')} />
      <meta property='og:image' content={`${_.get(metaTag, 'url', '')}/${ogImage}`} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:locale' content={`${_.get(metaTag, 'language', '')}`} data-react-helmet='true' />
      <meta property='og:site_name' content={_.get(metaTag, 'title', '')} />
      <meta property='og:type' content={`${_.get(metaTag, 'type', '')}`} />
      <meta property='og:title' content={_.get(metaTag, 'title', '')} />
      <meta property='og:url' content={_.get(metaTag, 'url', '')} />

      <link rel='apple-touch-icon' sizes='57x57' href={appleIcon57x57} />
      <link rel='apple-touch-icon' sizes='60x60' href={appleIcon60x60} />
      <link rel='apple-touch-icon' sizes='72x72' href={appleIcon72x72} />
      <link rel='apple-touch-icon' sizes='76x76' href={appleIcon76x76} />
      <link rel='apple-touch-icon' sizes='114x114' href={appleIcon114x114} />
      <link rel='apple-touch-icon' sizes='120x120' href={appleIcon120x120} />
      <link rel='apple-touch-icon' sizes='144x144' href={appleIcon144x144} />
      <link rel='apple-touch-icon' sizes='152x152' href={appleIcon152x152} />
      <link rel='apple-touch-icon' sizes='180x180' href={appleIcon180x180} />
      <link rel='icon' type='image/png' sizes='192x192' href={androidIcon192x192} />
      <link rel='icon' type='image/png' sizes='32x32' href={favicon32x32} />
      <link rel='icon' type='image/png' sizes='96x96' href={favicon96x96} />
      <link rel='icon' type='image/png' sizes='16x16' href={favicon16x16} />
      <meta name='msapplication-TileColor' content='#080f29' />
      <meta name='msapplication-TileImage' content={msIcon144x144} />
    </Helmet>
  )
}

export default SEO
