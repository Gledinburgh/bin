import { Modal, Row, Col } from 'antd'
import styles from '../styles/Modal.module.css'

const TestContent = () => {
  return (

    <div>
      <Row justify="space-between" align="middle">
        <Col className={styles["modal-img"]} span={10}>
          <img style={{ width: "100%" }} src='./mockup/scap-sign.png'></img>
        </Col>
        <Col className={styles["modal-text-box"]} span={12}>
          <Row justify='center'> Subtitle</Row>
          <Row className={styles["modal-text-box-body"]}>he demonstrative pronouns ini and iti (and their respective forms) both mean "this", but each has distinct uses. Iti usually refers to something abstract, but may also refer to concrete nouns: iting musika (this music), iti ing gagawan mi (this is what we do). </Row>
        </Col>
      </Row >

      <Row justify="space-between" align="middle">
        <Col className={styles["modal-text-box"]} span={12}>
          <Row justify='center'> Subtitle</Row>
          <Row className={styles["modal-text-box-body"]}> distinct uses. Iti usually refers to something abstract, but may also refer to concrete nouns: iting musika (this music), iti ing gagawan mi (this is  </Row>
        </Col>
        <Col span={10}>
          <img style={{ width: "100%" }} src='./mockup/scap-yard-dude.png'></img>
        </Col>
      </Row>

      <Row justify="space-between" align="middle">
        <Col className={styles["modal-img"]} span={10}>
          <img style={{ width: "100%" }} src='./mockup/scap-sign.png'></img>
        </Col>
        <Col className={styles["modal-text-box"]} span={12}>
          <Row justify='center'> Subtitle</Row>
          <Row className={styles["modal-text-box-body"]}>he demonstrative pronouns ini and iti (and their respective forms) both mean "this", but each has distinct uses. Iti usually refers to something abstract, but may also refer to concrete nouns: iting musika (this music), iti ing gagawan mi (this is what we do). </Row>
        </Col>
      </Row >

      <Row justify="space-between" align="middle">
        <Col className={styles["modal-text-box"]} span={12}>
          <Row justify='center'> Subtitle</Row>
          <Row className={styles["modal-text-box-body"]}> distinct uses. Iti usually refers to something abstract, but may also refer to concrete nouns: iting musika (this music), iti ing gagawan mi (this is  </Row>
        </Col>
        <Col span={10}>
          <img style={{ width: "100%" }} src='./mockup/scap-yard-dude.png'></img>
        </Col>
      </Row>
    </div >
  )
}

export default TestContent