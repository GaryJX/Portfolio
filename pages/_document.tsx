import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Gary Xie | Software Developer</title>
          {/* <link rel="icon" href="/logo.svg" /> */}

          <meta
            name="viewport"
            content="height=device-height, width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, viewport-fit=cover, shrink-to-fit=no"
          />
          {/* // TODO: Improve my meta description content (e.g. maybe match whatever I come up with for my Hero section) */}
          <meta
            name="description"
            content="Gary Xie is a software developer and student at University of Toronto."
          />
          {/* // TODO: Add meta tags for better SEO, and maybe PWA eventually? */}
          {/* // TODO: Add Google Analytics for my production site to see how many users visit, and from what devices? */}
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
