import { Row, Col } from 'antd'
import { useEffect } from 'react'
import styles from '../../styles/v1/Intro.module.css'
import Image from 'next/image'


const intro = () => {

  useEffect(() => {
    console.log("useEffect:intro")
  }, [])


  return (
    <Row className={styles["intro"]}>




      <span id={styles["into-text"]}>This is a story about a dumpster named Binjamin... but you can call him Bin for short!

        Bin is an average dumpster that helps those around him by holding on to the things they don

        't use

        anymore. It'

        s not the easiest responsibility and some days are harder than others but Bin always gives it his

        all every single time.</span>

    </Row>

  )
}

export default intro;