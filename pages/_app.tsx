import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';
import Script from 'next/script';
import * as ga from '../lib/google-analytics';

function MyApp({ Component, pageProps, router }) {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics-script' strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <ThemeProvider attribute='class'>
        <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 '>
          <div className='h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl dark:bg-black-500 shadow-custom-light dark:shadow-custom-dark'>
            <Sidebar />
          </div>
          <div className='flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl dark:bg-black-500 dark:text-white lg:col-span-9 shadow-custom-light dark:shadow-custom-dark'>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
