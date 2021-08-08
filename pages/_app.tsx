import React from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'

const TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!
ReactGA.initialize(TRACKING_ID)

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Gary Xie | Software Developer</title>
        <link rel="icon" href="/logo.svg" />
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, viewport-fit=cover, shrink-to-fit=no"
        />
        {/* // TODO: Add meta tags for better SEO, and maybe PWA eventually? */}
        {[400, 500, 600, 700].map((weight) => (
          <link
            key={weight}
            rel="preload"
            href={`/fonts/poppins-${weight}.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
