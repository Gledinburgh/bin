import { Row, Col } from 'antd'
import styles from '../../styles/Modal.module.css'
import { CarnivalDetails } from '../../data/ModalDetails/carnivalDetails'
import { useLayoutEffect, useRef, useState } from 'react'

const { rollerCoaster, tent, carousel, farisWheel, intro } = CarnivalDetails

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




const CarnivalContent = () => {

  useLayoutEffect(() => {

    console.log("useEffect: CarnivalContent");
  }, [])

  return (

    <div>

      <Row>
        <img className={styles["img"]} src={intro.img} alt={intro.alt}></img>
      </Row>

      <Row  {...RowSettings}>
        <Col  {...imageColSettings}>
          <div className={styles["connector"]} id={styles["connector-roller-coaster"]}></div>
          <img className={styles["img"]} src={rollerCoaster.img} alt={rollerCoaster.alt}></img>
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
          <div className={styles["connector"]} id={styles["connector-tent"]}></div>
          <img style={{ width: "100%" }} src={tent.img} alt={tent.alt}></img>
        </Col>
      </Row>

      <Row {...RowSettings}>
        <Col {...textColSettings} span={6}>
          <Row justify='center'><b>Toilet</b></Row>
          <Row className={styles["modal-text-box-body"]}>
            <p>{carousel.description[0]}</p>
          </Row>
        </Col>
        <Col {...imageColSettings} span={10}>
          <div className={styles["connector"]} id={styles["connector-toilet"]} />
          <div className={styles["connector"]} id={styles["connector-canoe"]} />
          <img style={{ width: "100%" }} src={carousel.img}></img>
        </Col>
        <Col {...textColSettings} span={6}>
          <Row justify='center'><b>Canoe</b></Row>
          <Row className={styles["modal-text-box-body"]}>
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
          <img style={{ width: "100%" }} src={farisWheel.img}></img>
        </Col>
      </Row>
    </div >
  )
}

export default CarnivalContent