import { Row, Col } from 'antd'
import styles from '../../styles/Modal.module.css'

const PetShopContent = () => {
  return (



    <div>
      <Row className={styles["scene"]} justify="space-between" align="middle">
        <Col id={styles["terrarium"]} >
          <img id={styles["coming-soon"]} src='./mockup/coming-soon.png' />
          <img style={{ width: "100%" }} src='./mockup/terrarium.png'></img>
          <Col id={styles["hermit-crab-translate"]}>
            <img id={styles["hermit-crab"]} src='./mockup/hermit-crab.png' />
          </Col>
        </Col>

      </Row>

    </div>


  )
}

export default PetShopContent