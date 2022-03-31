import { Row, Col } from 'antd'
import styles from '../../styles/Modal.module.css'
import { CarnivalDetails } from '../../data/ModalDetails/carnivalDetails'

const { rollerCoaster, tent, carousel, farisWheel } = CarnivalDetails

const RowSettings: any = {
  justify: "space-between",
  align: "middle"
}

const imageColSettings: any = {
  className: styles["modal-img"],
  span: 10
}

const textColSettings: any = {
  className: styles["modal-text-box"],
  span: 12
}



const CarnivalContent = () => {
  return (

    <div>
      <Row {...RowSettings}>
        <Col {...imageColSettings}>
          <img style={{ width: "100%" }} src={rollerCoaster.img} alt={rollerCoaster.alt}></img>
        </Col>
        <Col {...textColSettings}>
          <Row justify='center'><b>{rollerCoaster.title}</b></Row>
          <Row className={styles["modal-text-box-body"]}>{rollerCoaster.description} </Row>
        </Col>
      </Row >

      <Row {...RowSettings}>
        <Col {...textColSettings}>
          <Row justify='center'><b>{tent.title}</b></Row>
          <Row className={styles["modal-text-box-body"]}> {tent.description} </Row>
        </Col>
        <Col {...imageColSettings}>
          <img style={{ width: "100%" }} src={tent.img} alt={tent.alt}></img>
        </Col>
      </Row>

      <Row {...RowSettings}>
        <Col {...imageColSettings}>
          <img style={{ width: "100%" }} src={carousel.img}></img>
        </Col>
        <Col {...textColSettings}>
          <Row justify='center'><b>{carousel.title}</b></Row>
          <Row className={styles["modal-text-box-body"]}>
            <p>{carousel.description[0]}</p>
            <p>{carousel.description[1]}</p>
          </Row>
        </Col>
      </Row >

      <Row {...RowSettings}>
        <Col {...textColSettings}>
          <Row justify='center'> <b>{farisWheel.title}</b></Row>
          <Row className={styles["modal-text-box-body"]}> {farisWheel.description} </Row>
        </Col>
        <Col {...imageColSettings}>
          <img style={{ width: "100%" }} src='./mockup/faris-wheel.png'></img>
        </Col>
      </Row>
    </div >
  )
}

export default CarnivalContent