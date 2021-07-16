import React, { useMemo, useState } from 'react'
import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import GlobalContext from '@/context/GlobalContext'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.scss'
import { useEffect } from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true)
  // TODO: Move theme logic to it's own file (including the useEffect and toggleLogic in ThemeToggle.tsx)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const globalContext = useMemo(
    () => ({ loading, setLoading, theme, setTheme }),
    [loading, setLoading, theme, setTheme]
  )

  useEffect(() => {
    const otherTheme = theme === 'light' ? 'dark' : 'light'
    document.body.classList.remove(`${otherTheme}-theme`)
    document.body.classList.add(`${theme}-theme`)
  }, [theme])

  return (
    <GlobalContext.Provider value={globalContext}>
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
        {loading && <Loading onAnimationComplete={() => setLoading(false)} />}
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  )
}

export default App
