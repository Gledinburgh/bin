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

  function toggleModalVisability(e: React.SyntheticEvent<HTMLElement>): void {
    setModalVisability(!modalVisability)
  }

  useEffect(() => {
    console.log("useEffect: index.js")
  }, [modalVisability])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>



        <Modal visability={modalVisability} modalSwitch={toggleModalVisability} activeActor={"test"} />
        <Row>
          <Col>
            <Header />
            <div className={styles["scroll-x"]}>
              <Grid modalSwitch={toggleModalVisability} />
            </div>
          </Col>

        </Row>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Home
