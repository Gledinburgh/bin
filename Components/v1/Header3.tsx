
import styles from '../../styles/v1/Header.module.css'
import { Row, Col } from 'antd'
import { useEffect } from 'react'
import Image from 'next/image'
const Header3 = () => {

  useEffect(() => {
    console.log("useEffect:Header")
  }, [])


  return (
    <Row justify='center' className={styles["header-container"]}>
      <div id={styles["title"]}>
        <div id={styles["img-container"]}>
          <img id={styles["title-shaddow"]} src="mockup/title-shaddow2.png" />
          <img id={styles["title-img"]} src="mockup/titlev2.png" />
        </div>
        <div id={styles["title-base"]}></div>
      </div>

    </Row>

  )
}

export default Header3;