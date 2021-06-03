import React from 'react'
import Head from 'next/head'

import '../assets/css/theme.css'
import '../assets/css/custom.css'
import "gluestick-elements/dist/index.css";

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
            <title>gluestick – SaaS targets</title>

            <link rel="icon" href="/favicon.ico" />

            {/* Meta */}
            <meta property="og:locale" content="en-US"/>
            <meta name="title" content="gluestick – SaaS targets"/>
            <meta name="description" content="Simple, reusable, open-source SaaS targets"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://gluestick.xyz"/>
            <meta property="og:site_name" content="gluestick – SaaS targets"/>
            <meta property="og:image" content="https://gluestick.xyz/gluestick.png"/>
            <meta property="og:description" content="Simple, reusable, open-source SaaS targets"/>

            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@hotgluexyz"/>
            <meta name="twitter:title" content="gluestick – SaaS targets"/>
            <meta name="twitter:description" content="Simple, reusable, open-source SaaS targets"/>

            {/* Fonts */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&display=swap"/>

            {/* General JS */}
            <script type="text/javascript" src="/js/aos.js"/>
            <script type="text/javascript" src="/js/jquery.min.js"></script>
            <script type="text/javascript" src="/js/bootstrap.js"></script>

            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-095DCNKJGQ"></script>
            <script type="text/javascript" src="/js/gtag.js"/>
            </>
        </Head>
        <Component {...pageProps}/>
    </div>

}

export default App
