import { Row, Col } from 'antd'
import styles from '../styles/Modal.module.css'

const TestContent = () => {
  return (

    <div>
      <Row className={styles["content-container"]} justify="space-between" align="middle">

        <div className={styles["modal-intro-container"]}>
          <Row className={styles["into-placeholder"]}></Row>
          <Col className={styles["modal-intro"]}>
            <Row justify='center'><h3>Section in progress</h3> </Row>
            <Row className={styles["modal-text-box-body"]}> </Row>
          </Col>
        </div>
      </Row >

    </div >
  )
}

export default TestContent