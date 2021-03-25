import React from 'react'
import Head from 'next/head'

import '../assets/css/theme.css'
import '../assets/css/custom.css'

function App({ Component, pageProps }) {
  React.useEffect(() => {
    // Init AOS
    if (window.AOS) {
        window.AOS.init();
    }
  });

  return <div>
        <Head>
            <>
            <title>gluestick</title>

            <link rel="icon" href="/favicon.ico" />

            {/* Meta */}
            <meta property="og:locale" content="en-US"/>

            {/* Fonts */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&display=swap"/>

            {/* General JS */}
            <script type="text/javascript" src="/js/aos.js"/>
            <script type="text/javascript" src="/js/jquery.min.js"></script>
            <script type="text/javascript" src="/js/bootstrap.js"></script>
            </>
        </Head>
        <Component {...pageProps}/>
    </div>

}

export default App
