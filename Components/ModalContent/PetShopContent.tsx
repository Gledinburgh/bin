import { Row, Col } from 'antd'
import styles from '../../styles/Modal.module.css'

const PetShopContent = () => {
  return (




    <Row className={styles["scene"]} justify="center" align="middle">
      <Col id={styles['terrarium-container']}>
        <img id={styles["terrarium-back"]} style={{ width: "100%" }} src='./mockup/terrarium-back.png'></img>
        <img id={styles["terrarium-front"]} style={{ width: "100%" }} src='./mockup/terrarium-front.png'></img>
        <img id={styles["coming-soon"]} src='./mockup/coming-soon.png' />
        <Col id={styles["hermit-crab-translate"]}>
          <img id={styles["hermit-crab"]} src='./mockup/hermit-crab.png' />
        </Col>

      </Col>

    </Row>




  )
}

export default PetShopContent