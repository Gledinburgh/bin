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
        <title>Binjamin the dumpster</title>
        <meta name="description" content={`Meet Bin and learn more about his adventures through his upcomming children\'s book \"Binjamin the Dumpster\f`} />
        <meta property="og:image" content="/Bin-face2.jpg" />
        <meta property="twitter:image" content="/Bin-face2.jpg" />

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
