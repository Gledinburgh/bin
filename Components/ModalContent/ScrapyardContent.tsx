import { Row, Col } from 'antd'
import styles from '../../styles/Modal.module.css'

import { scrapYardDetails } from '../../data/ModalDetails/scrapYardDetails'
import { BoxPlotFilled } from '@ant-design/icons'
const { intro, Eli, BoxCar } = scrapYardDetails

const RowSettings: any = {
  justify: "space-between",
  align: "middle",
  className: styles["modal-text-box-container"]
}

const imageColSettings: any = {
  className: styles["modal-img"],
  span: 10
}

const textColSettings: any = {
  className: styles["modal-text-box"],
  span: 12
}


const ScrapyardContent = () => {
  return (

    <div>

      <Row  {...RowSettings}>
        <img className={styles["img"]} alt={intro.alt} src={intro.img}></img>
        <Col className={styles["modal-text-box"]}>
          <Row justify='center'><h3>{intro.title}</h3> </Row>
          <Row className={styles["modal-text-box-body"]}>{intro.description}  </Row>
        </Col>
      </Row>



      <Row  {...RowSettings}>
        <Col {...textColSettings}>
          <Row justify='center'><b>{Eli.title}</b></Row>
          <Row className={styles["modal-text-box-body"]}> {Eli.description} </Row>
        </Col>
        <Col {...imageColSettings}>
          <div className={styles["connector"]} id={styles["connector-tent"]}></div>
          <img style={{ width: "100%" }} src={Eli.img} alt={Eli.alt}></img>
        </Col>

      </Row >

      <Row  {...RowSettings}>
        <Col  {...imageColSettings}>
          <div className={styles["connector"]} id={styles["connector-roller-coaster"]}></div>
          <img className={styles["img"]} src={BoxCar.img} alt={BoxCar.alt}></img>
        </Col>
        <Col {...textColSettings}>
          <Row justify='center'><b>{BoxCar.title}</b></Row>
          <Row className={styles["modal-text-box-body"]}>{BoxCar.description} </Row>
        </Col>
      </Row >


    </div >
  )
}

export default ScrapyardContent