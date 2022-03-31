import { Row, Col } from 'antd'
import styles from '../../styles/Modal.module.css'

const ScrapyardContent = () => {
  return (

    <div>
      <Row justify="space-between" align="middle">
        {/* <Col className={styles["modal-img"]} span={10}> */}
        <img style={{ width: "100%" }} src='./ModalContent/ScrapYard/scrap-yard.png'></img>
        {/* </Col> */}
        <div className={styles["modal-intro-container"]}>
          <Row className={styles["into-placeholder"]}></Row>
          <Col className={styles["modal-intro"]}>
            <Row justify='center'><h3>The Scrap Yard</h3> </Row>
            <Row className={styles["modal-text-box-body"]}>What started off as a stopping point for Eli between his curious vagabond travels throughout the country, a small single room cabin turned into a sprawling landscape composed of unique and forgotten items he would collect along the way. This scrap emporium would become a favorite sourcing location for The Major’s Traveling Scrap Carnival.  </Row>
          </Col>
        </div>
      </Row >

      <Row justify="space-between" align="middle">
        <Col className={styles["modal-text-box"]} span={12}>
          <Row justify='center'> <h3>The scruffy old man (Eli)</h3></Row>
          <Row className={styles["modal-text-box-body"]}> Always the free spirit, Eli spent his youth traveling the country operating trains of all sizes but really only finding true joy from the thrill of just jumping on a random train car not knowing where it would take him. Throughout his adventures Eli would take on various trades and meet many interesting people, but his favorite hobby was collecting forgotten treasures that most would consider trash. Before he knew it, Eli’s small cabin would become a museum of his travels that hold the memories of days gone. </Row>
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
          <Row justify='center'> <h3>“Boxcar” the pup</h3></Row>
          <Row className={styles["modal-text-box-body"]}>Found as a young pup lost along a railroad track near Boston, the tiny bulldog would join Eli on his travels offering companionship and becoming his lifelong friend.</Row>
        </Col>
      </Row >
    </div >
  )
}

export default ScrapyardContent