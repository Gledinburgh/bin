import { Row, Col } from 'antd'
import styles from '../../../styles/v1/Modal.module.css'

import { scrapYardDetails } from '../../../data/ModalDetails/scrapYardDetails'
import { BoxPlotFilled } from '@ant-design/icons'
const { intro, Eli, BoxCar } = scrapYardDetails

const RowSettings: any = {
  justify: "space-between",
  align: "middle",
  className: styles["modal-text-box-container"]
}

const imageColSettings: any = {
  className: styles["modal-img"],
  span: 12
}

const textColSettings: any = {
  className: styles["modal-text-box"],
  span: 10
}


const ScrapyardContent = () => {
  return (

    <div>

      <Row  {...RowSettings}>
        <Col className={styles["modal-text-box"]}>
          <Row justify='center'><h3>Meet Eli!</h3> </Row>
          <Row className={styles["modal-text-box-body"]}>{`A scruffy Garbage Man, and Bin's best freind!`}  </Row>
        </Col>
      </Row>



      <Row  {...RowSettings}>
        <Col {...textColSettings}>
          <Row justify='center'><b>Eli is a free spirit</b></Row>
          <Row className={styles["modal-text-box-body"]}> {Eli.description} </Row>
        </Col>
        <Col {...imageColSettings}>
          <img style={{ width: "100%" }} src={Eli.img} alt={Eli.alt}></img>
        </Col>

      </Row >

      <Row  {...RowSettings}>
        <Col  {...imageColSettings}>
          <img className={styles["img"]} src={BoxCar.img} alt={BoxCar.alt}></img>
        </Col>
        <Col {...textColSettings}>
          <Row justify='center'><b>Eli is Bin's best Freind</b></Row>
          <Row className={styles["modal-text-box-body"]}>Eli now spends his time looking after Bin a making sure he is always taken care of. </Row>
        </Col>
      </Row >


    </div >
  )
}

export default ScrapyardContent