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
        <div className="services-container1">
          <h1 className="services-text">Services</h1>
          <span className="services-date-time">
            <DateTimePrimitive
              format="ddd, MMM D, YYYY h:mm A"
              date="Wed May 15 2024 20:06:43 GMT+0200 (Central European Summer Time)"
            ></DateTimePrimitive>
          </span>
        </div>
        <div className="services-container2">
          <a href="https://cloud.cg0072.lu" className="services-link button">
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="services-image"
            />
            <span className="services-text1">Cloud</span>
            Button
          </a>
          <a href="https://ssh.cg0072.lu" className="services-link1 button">
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="services-image1"
            />
            <span className="services-text2">SSH</span>
            Button
          </a>
          <a
            href="https://portainer.cg0072.lu"
            className="services-link2 button"
          >
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="services-image2"
            />
            <span className="services-text3">Portainer</span>
            Button
          </a>
          <a href="https://uptime.cg0072.lu" className="services-link3 button">
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="services-image3"
            />
            <span className="services-text4">Uptime</span>
            Button
          </a>
        </div>
        <div className="services-container3">
          <a href="https://cg0072.lu" className="services-link4 button">
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="services-image4"
            />
            <span className="services-text5">cg0072.lu</span>
            Button
          </a>
          <a href="https://spotify.cg0072.lu" className="services-link5 button">
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="services-image5"
            />
            <span className="services-text6">Spotify</span>
            Button
          </a>
          <a
            href="https://filebrowser.cg0072.lu"
            className="services-link6 button"
          >
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="services-image6"
            />
            <span className="services-text7">File Browser</span>
            Button
          </a>
          <a href="https://uptime.cg0072.lu" className="services-link7 button">
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="services-image7"
            />
            <span className="services-text8">Uptime</span>
            Button
          </a>
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
          .services-container1 {
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
          .services-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .services-link {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .services-image {
            width: 200px;
            object-fit: cover;
          }
          .services-text1 {
            text-align: center;
          }
          .services-link1 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .services-image1 {
            width: 200px;
            object-fit: cover;
          }
          .services-text2 {
            text-align: center;
          }
          .services-link2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .services-image2 {
            width: 200px;
            object-fit: cover;
          }
          .services-text3 {
            text-align: center;
          }
          .services-link3 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .services-image3 {
            width: 200px;
            object-fit: cover;
          }
          .services-text4 {
            text-align: center;
          }
          .services-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .services-link4 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .services-image4 {
            width: 200px;
            object-fit: cover;
          }
          .services-text5 {
            text-align: center;
          }
          .services-link5 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .services-image5 {
            width: 200px;
            object-fit: cover;
          }
          .services-text6 {
            text-align: center;
          }
          .services-link6 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .services-image6 {
            width: 200px;
            object-fit: cover;
          }
          .services-text7 {
            text-align: center;
          }
          .services-link7 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .services-image7 {
            width: 200px;
            object-fit: cover;
          }
          .services-text8 {
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export default Services
