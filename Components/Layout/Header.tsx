
import styles from '../../styles/Home.module.css'
import { Row, Col } from 'antd'
import { useEffect } from 'react'

const Header = () => {

  useEffect(() => {
    console.log("useEffect:Header")
  }, [])


  return (
    <div id={styles["header-container"]}>
      <Row justify='start' align="bottom">

        <Col span={7} >
          <span id={styles["title"]} > Bin </span>

        </Col>
        <Col span={15}>
          <Row justify='start' align="bottom" id={styles["nav"]}>
            <Col span={8}>| <a>shop</a></Col>
            <Col span={8}>| <a>about</a></Col>
            <Col span={8}>| <a>instagram</a></Col>


          </Row>
        </Col>
      </Row>
    </div >
  )
}

export default Header;