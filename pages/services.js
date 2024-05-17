import React from 'react'
import Head from 'next/head'

import { DateTimePrimitive } from '@teleporthq/react-components'

const Services = (props) => {
  return (
    <>
      <div className="services-container">
        <Head>
          <title>Services - CG0072</title>
          <meta property="og:title" content="Services - CG0072" />
        </Head>
        <div className="services-container01">
          <h1 className="services-text">Services</h1>
          <span className="services-date-time">
            <DateTimePrimitive
              format="ddd, MMM D, YYYY h:mm A"
              date="Wed May 15 2024 20:06:43 GMT+0200 (Central European Summer Time)"
            ></DateTimePrimitive>
          </span>
        </div>
        <div className="services-container02">
          <div className="services-container03">
            <a href="https://cloud.cg0072.lu" className="services-link">
              <div className="services-container04">
                <img
                  alt="image"
                  src="/cloud-200h.png"
                  className="services-image"
                />
                <span className="services-text1">Cloud</span>
              </div>
            </a>
            <a href="https://spotify.cg0072.lu" className="services-link1">
              <div className="services-container05">
                <img
                  alt="image"
                  src="/spotify-200h.png"
                  className="services-image1"
                />
                <span className="services-text2">Your-Spotify</span>
              </div>
            </a>
            <a href="https://uptime.cg0072.lu" className="services-link2">
              <div className="services-container06">
                <img
                  alt="image"
                  src="/kuma-200h.png"
                  className="services-image2"
                />
                <span className="services-text3">Uptime</span>
              </div>
            </a>
            <a href="https://link.cg0072.lu/admin" className="services-link3">
              <div className="services-container07">
                <img
                  alt="image"
                  src="/link-200h.png"
                  className="services-image3"
                />
                <span className="services-text4">Link Shortner</span>
              </div>
            </a>
          </div>
          <div className="services-container08">
            <a href="https://cg0072.lu" className="services-link4">
              <div className="services-container09">
                <img
                  alt="image"
                  src="/favicon.png"
                  className="services-image4"
                />
                <span className="services-text5">Website</span>
              </div>
            </a>
            <a href="https://filebrowser.cg0072.lu" className="services-link5">
              <div className="services-container10">
                <img
                  alt="image"
                  src="/filebrowser-200h.png"
                  className="services-image5"
                />
                <span className="services-text6">Filebrowser</span>
              </div>
            </a>
            <a href="https://ssh.cg0072.lu" className="services-link6">
              <div className="services-container11">
                <img
                  alt="image"
                  src="/terminal-200h.png"
                  className="services-image6"
                />
                <span className="services-text7">SSH</span>
              </div>
            </a>
            <a href="https://portainer.cg0072.lu" className="services-link7">
              <div className="services-container12">
                <img
                  alt="image"
                  src="/portainer-200h.png"
                  className="services-image7"
                />
                <span className="services-text8">Portainer</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .services-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .services-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text {
            margin: var(--dl-space-space-halfunit);
          }
          .services-date-time {
            margin: var(--dl-space-space-halfunit);
          }
          .services-container02 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-container03 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: stretch;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: center;
          }
          .services-link {
            display: contents;
          }
          .services-container04 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .services-image {
            width: 200px;
            object-fit: cover;
          }
          .services-text1 {
            width: 100%;
            margin: var(--dl-space-space-halfunit);
            font-size: 30px;
            align-self: center;
            text-align: center;
          }
          .services-link1 {
            display: contents;
          }
          .services-container05 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .services-image1 {
            width: 200px;
            object-fit: cover;
          }
          .services-text2 {
            width: 100%;
            margin: var(--dl-space-space-halfunit);
            font-size: 30px;
            align-self: center;
            text-align: center;
          }
          .services-link2 {
            display: contents;
          }
          .services-container06 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .services-image2 {
            width: 200px;
            object-fit: cover;
          }
          .services-text3 {
            width: 100%;
            margin: var(--dl-space-space-halfunit);
            font-size: 30px;
            align-self: center;
            text-align: center;
          }
          .services-link3 {
            display: contents;
          }
          .services-container07 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .services-image3 {
            width: 200px;
            object-fit: cover;
          }
          .services-text4 {
            width: 100%;
            margin: var(--dl-space-space-halfunit);
            font-size: 30px;
            align-self: center;
            text-align: center;
          }
          .services-container08 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: stretch;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: center;
          }
          .services-link4 {
            display: contents;
          }
          .services-container09 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .services-image4 {
            width: 200px;
            object-fit: cover;
          }
          .services-text5 {
            width: 100%;
            margin: var(--dl-space-space-halfunit);
            font-size: 30px;
            align-self: center;
            text-align: center;
          }
          .services-link5 {
            display: contents;
          }
          .services-container10 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .services-image5 {
            width: 200px;
            object-fit: cover;
          }
          .services-text6 {
            width: 100%;
            margin: var(--dl-space-space-halfunit);
            font-size: 30px;
            align-self: center;
            text-align: center;
          }
          .services-link6 {
            display: contents;
          }
          .services-container11 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .services-image6 {
            width: 200px;
            object-fit: cover;
          }
          .services-text7 {
            width: 100%;
            margin: var(--dl-space-space-halfunit);
            font-size: 30px;
            align-self: center;
            text-align: center;
          }
          .services-link7 {
            display: contents;
          }
          .services-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .services-image7 {
            width: 200px;
            object-fit: cover;
          }
          .services-text8 {
            width: 100%;
            margin: var(--dl-space-space-halfunit);
            font-size: 30px;
            align-self: center;
            text-align: center;
          }
          @media (max-width: 1600px) {
            .services-container02 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .services-container02 {
              gap: var(--dl-space-space-twounits);
              width: auto;
              flex-direction: row;
              justify-content: center;
            }
            .services-container03 {
              width: auto;
              flex-direction: column;
            }
            .services-container08 {
              width: auto;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Services
