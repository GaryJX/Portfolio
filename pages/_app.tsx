import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Gary Xie | Software Developer</title>
        <link rel="icon" href="/logo.svg" />
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover, shrink-to-fit=no"
        />
        {/* // TODO: Add meta tags for better SEO, and maybe PWA eventually? */}
        {/* // TODO: Add Google Analytics for my production site to see how many users visit, and from what devices? */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
