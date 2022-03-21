import { Row, Col } from 'antd'
import styles from '../../styles/Modal.module.css'

const ScrapyardContent = () => {
  return (

    <div>
      <Row justify="space-between" align="middle">
        {/* <Col className={styles["modal-img"]} span={10}> */}
        <img style={{ width: "100%" }} src='./mockup/scrap-yard.png'></img>
        {/* </Col> */}
        <div className={styles["modal-intro-container"]}>
          <Row className={styles["into-placeholder"]}></Row>
          <Col className={styles["modal-intro"]}>
            <Row justify='center'><h3>The Scrap Yard</h3> </Row>
            <Row className={styles["modal-text-box-body"]}>he demonstrative pronouns ini and iti (and their respective forms) both mean "this", but each has distinct uses. Iti usually refers to something abstract, but may also refer to concrete nouns: iting musika (this music), iti ing gagawan mi (this is what we do). </Row>
          </Col>
        </div>
      </Row >

      <Row justify="space-between" align="middle">
        <Col className={styles["modal-text-box"]} span={12}>
          <Row justify='center'> <h3>Scruffy Old Man</h3></Row>
          <Row className={styles["modal-text-box-body"]}> distinct uses. Iti usually refers to something abstract, but may also refer to concrete nouns: iting musika (this music), iti ing gagawan mi (this is  </Row>
        </Col>
        <Col span={10}>
          <img style={{ width: "100%" }} src='./mockup/dude2.png'></img>
        </Col>
      </Row>

      <Row justify="space-between" align="middle">
        <Col className={styles["modal-img"]} span={10}>
          <img style={{ width: "100%" }} src='./mockup/dog.png'></img>
        </Col>
        <Col className={styles["modal-text-box"]} span={12}>
          <Row justify='center'> <h3>Doggo's Name</h3></Row>
          <Row className={styles["modal-text-box-body"]}>he demonstrative pronouns ini and iti (and their respective forms) both mean "this", but each has distinct uses. Iti usually refers to something abstract, but may also refer to concrete nouns: iting musika (this music), iti ing gagawan mi (this is what we do). </Row>
        </Col>
      </Row >
    </div >
  )
}

export default ScrapyardContent