import { Row, Col } from 'antd'
import styles from '../../styles/Modal.module.css'

const ParkContent = () => {
  return (

    <div>
      <Row id={styles["sky"]} justify="space-between" align="middle">
        <Col id={styles["sun"]} >
          <img id={styles["sun-back"]} src='./mockup/sun-back.png' />
          <img id={styles["sun-face"]} src='./mockup/sun-face.png' />
        </Col>
        <img id={styles["clouds"]} style={{ width: "100%" }} src='./mockup/clouds.png'></img>

      </Row >

      <Row justify="space-between" align="middle">


        <Col span={24}>
          <img style={{ width: "100%" }} src='./mockup/bench.png'></img>
        </Col>
      </Row>

    </div >
  )
}

export default ParkContent