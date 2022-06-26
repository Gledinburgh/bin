import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Canvas from '../Components/v1/Canvas'
import { Row, Col } from 'antd'
import styles from '../styles/v1/Home.module.css'

import { GeneralContext } from '../Context/GeneralContext'
import Modal from '../Components/v1/Modal'
import { useState, useEffect, useRef } from 'react'
import Header3 from '../Components/v1/Header3'
import Nav from '../Components/v1/Nav'
import About from '../Components/v1/About'
import Intro from '../Components/v1/Intro'


const Home: NextPage = () => {

  const context = GeneralContext();
  const [modalVisability, setModalVisability] = useState(false);
  const [aboutVisability, setAboutVisability] = useState(false);
  const [activeActor, setActiveActor] = useState('')

  const metaInfo = {
    "title": "Binjamin the Dumpster",
    "description": `Meet Bin and learn more about his adventures through the upcomming book \"Binjamin the Dumpster\"`,
    "link": "https://bin.lspckspe2i73m.us-east-1.cs.amazonlightsail.com/",
    "img": "https://bin.lspckspe2i73m.us-east-1.cs.amazonlightsail.com/Bin-face2.png"
  }

  function toggleAboutVisability(e: React.SyntheticEvent<HTMLElement>): void {
    console.log("about visibility fired")
    setAboutVisability(!aboutVisability)
  }

  function closeModal(e: React.SyntheticEvent<HTMLElement>): void {
    setModalVisability(false)
  }

  function openModal(e: React.SyntheticEvent<HTMLElement>): void {
    setModalVisability(true)
  }



  useEffect(() => {
    console.log("useEffect: index.js")
  }, [modalVisability])
  return (
    <>
      <Head>

        <title>{metaInfo.title}</title>
        <meta name="description" content={metaInfo.description} />

        <meta property="og:url" content={metaInfo.link} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaInfo.title} />
        <meta property="og:description" content={metaInfo.description} />
        <meta property="og:image" content={metaInfo.img} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bin.lspckspe2i73m.us-east-1.cs.amazonlightsail.com" />
        <meta property="twitter:url" content={metaInfo.link} />
        <meta name="twitter:title" content={metaInfo.title} />
        <meta name="twitter:description" content={metaInfo.description} />
        <meta name="twitter:image" content={metaInfo.img} />



        <link rel="icon" type="image/png" sizes="16x16" href="/mockup/favicon-16x16.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/mockup/favicon-32x32.ico" />
        <link rel="icon" type="image/png" sizes="180x180" href="/mockup/favicon-180x180.ico" />
        <link rel="icon" type="image/png" sizes="300x300" href="/mockup/favicon-300x300.ico" />
      </Head>

      <main className={styles.main}>
        <Modal
          visability={modalVisability}
          closeModal={closeModal}
          activeActor={activeActor} />


        <Row id={styles["header"]} justify='center'>
          <Image
            id={styles["header-img"]}
            src="/Background/dumpster-texture.jpg"
            alt="Decorative"
            layout="fill"
            objectFit='cover'
            objectPosition="center"
          />


          <Col><Header3 /></Col>
        </Row>


        <Row id={styles["content"]} justify='center'>

          <Col id={styles["interactive-zone"]} >

            <About
              isVisible={aboutVisability} />
            <div id={styles["stage"]}>
              <Canvas openModal={openModal} />
            </div>

            <Nav
              toggleVisability={toggleAboutVisability} />
          </Col>
        </Row>


      </main>

      <footer className={styles["footer"]}>

        <Image
          id={styles["footer-img"]}
          src="/Background/turquoise-rusted-metal-sheet.jpg"
          alt="Decorative"
          layout="fill"
          objectFit='cover'
          objectPosition="center"
        />


      </footer>
    </>
  )
}

export default Home
