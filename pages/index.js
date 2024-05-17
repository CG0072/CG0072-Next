import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>CG0072</title>
          <meta property="og:title" content="CG0072" />
        </Head>
        <h1 className="home-text">Nothing to do here</h1>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text {
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            margin: auto;
            position: absolute;
            align-self: center;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export default Home
