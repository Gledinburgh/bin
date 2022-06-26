import styles from '../../styles/v1/Header.module.css'
import { Row, Col } from 'antd'
import { useEffect, SyntheticEvent } from 'react'

const Nav = ({ toggleVisability }: { toggleVisability: (e: SyntheticEvent<HTMLElement>) => void }) => {

  useEffect(() => {
    console.log("useEffect:Nav")
  }, [])

  const ebook = {
    href: "https://issuu.com/smittyville/docs/bin_v8-2"
  }


  return (
    <Row align="top" justify="start" id={styles["nav"]}>
      <div id={styles["nav-back"]}></div>

      <Col onClick={toggleVisability} className={styles["link-container"]} span={5} ><a className={styles["link"]}> about</a></Col>

      <Col className={styles["link-container"]} span={5} ><a
        href={ebook.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles["link"]}>
        e-book</a></Col>

      <Col className={styles["link-container"]} span={5} ><a className={styles["link"]}> Purchase</a></Col>

      <Col className={styles["link-container"]} span={5} ><a className={styles["link"]}> instagram</a></Col>


    </Row>
  )
}

export default Nav;