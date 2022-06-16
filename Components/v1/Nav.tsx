import styles from '../../styles/v1/Header.module.css'
import { Row, Col } from 'antd'
import { useEffect } from 'react'

const Nav = () => {

  useEffect(() => {
    console.log("useEffect:Nav")
  }, [])


  return (
    <Row align="top" justify="start" id={styles["nav"]}>
      <div id={styles["nav-back"]}></div>

      <Col className={styles["link-container"]} span={5} ><a className={styles["link"]}> about</a></Col>
      <Col className={styles["link-container"]} span={5} ><a className={styles["link"]}> e-book</a></Col>
      <Col className={styles["link-container"]} span={5} ><a className={styles["link"]}> Purchase</a></Col>
      <Col className={styles["link-container"]} span={5} ><a className={styles["link"]}> instagram</a></Col>


    </Row>
  )
}

export default Nav;