
import styles from '../../styles/Home.module.css'
import { Row, Col } from 'antd'
import { useEffect } from 'react'

const Header = () => {

  useEffect(() => {
    console.log("useEffect:Header")
  }, [])


  return (
    <div id={styles["header-container"]}>
      <div id={styles["nav-base"]}></div>
      <Row justify='start' align="bottom">

        <Col span={10} >
          <span id={styles["title"]} > Bin </span>

        </Col>
        <Col span={14}>
          <div className={styles["nav-wrapper"]}>

            <Row justify='start' align="bottom" id={styles["nav"]}>
              <Col span={8}>| <a className={styles["link"]}>shop</a></Col>
              <Col span={8}>| <a className={styles["link"]} > about</a></Col>
              <Col span={8}>| <a className={styles["link"]} > instagram</a></Col>
            </Row>
          </div>
        </Col >
      </Row >
    </div >
  )
}

export default Header;