import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Grid from '../Components/Grid'
import { Row, Col } from 'antd'
import styles from '../styles/Home.module.css'
import { GeneralContext } from '../Context/GeneralContext'
import Modal from '../Components/Layout/Modal'
import { useState, useEffect } from 'react'
import Header from '../Components/Layout/Header'


const Home: NextPage = () => {

  const context = GeneralContext();
  const [modalVisability, setModalVisability] = useState(false);
  const [activeActor, setActiveActor] = useState('')

  const metaInfo = {
    "title": "Binjamin the Dumpster",
    "description": `Meet Bin and learn more about his adventures through his upcomming children's book \"Binjamin the Dumpster\"`,
    "link": "https://bin.lspckspe2i73m.us-east-1.cs.amazonlightsail.com/",
    "img": "https://bin.lspckspe2i73m.us-east-1.cs.amazonlightsail.com/Bin-face2.png"
  }

  function toggleModalVisability(e: React.SyntheticEvent<HTMLElement>): void {
    setModalVisability(!modalVisability)
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

        <Row id="main-content-container">
          <Col>
            <Header />
            <Grid openModal={openModal} />
          </Col>

        </Row>


      </main>

      <footer className={styles.footer}>

      </footer>
    </>
  )
}

export default Home
