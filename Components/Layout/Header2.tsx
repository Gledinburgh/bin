
import styles from '../../styles/Home.module.css'
import { Row, Col } from 'antd'
import { useEffect } from 'react'

const Header2 = () => {

  useEffect(() => {
    console.log("useEffect:Header")
  }, [])


  return (
    <Row className={styles["header-container"]}>
      <div id={styles["title"]}>
        <div id={styles["img-container"]}>

          <img id={styles["title-img"]} src="mockup/titlev2.png" />
        </div>
        <div id={styles["title-base"]}></div>
      </div>

    </Row>

  )
}

export default Header2;