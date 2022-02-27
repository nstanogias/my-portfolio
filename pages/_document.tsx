import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap'
            rel='stylesheet'
          />
          <meta name='description' content='Web developer' />
          <meta name='keywords' content='Full Stack Web Developer, Freelancer' />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className='bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-black-200 dark:to-black-700 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
