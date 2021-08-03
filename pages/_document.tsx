import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* // TODO: Uncomment this later to include Google Analytics (the issue is that it is getting blocked by ad blockers right now) */}
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          />
          <script async src="gtag.js" /> */}
          {/* // TODO: Improve my meta description content (e.g. maybe match whatever I come up with for my Hero section) */}
          <meta
            name="description"
            content="Gary Xie is a software developer specializing in building extraordinary experiences for the web."
          />
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
