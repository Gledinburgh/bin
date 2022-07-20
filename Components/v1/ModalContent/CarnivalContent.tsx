import { Row, Col } from 'antd'
import styles from '../../../styles/v1/Modal.module.css'
import carnivalStyle from '../../../styles/v1/Carnival.module.css'
import { CarnivalDetails } from '../../../data/v1/ModalDetails/carnivalDetails'
import { useLayoutEffect, useRef, useState } from 'react'

const { carnivalAtractions, carnivalAtractions2, intro } = CarnivalDetails

const RowSettings: any = {
  justify: "space-between",
  align: "middle",
  className: styles["modal-text-box-container"]
}

const imageColSettings: any = {
  className: styles["modal-img"],
  span: 14
}

const textColSettings: any = {
  className: styles["modal-text-box"],
  span: 10
}




const CarnivalContent = () => {

  useLayoutEffect(() => {

    console.log("useEffect: CarnivalContent");
  }, [])

  return (

    <div id={carnivalStyle["container"]}>

      <Row  {...RowSettings}>
        <Col className={styles["modal-text-box"]}>
          <Row justify='center'><h3>Welcome to the Traveling Scrap Carnival!</h3> </Row>
          <Row className={styles["modal-text-box-body"]}>{`An unusal collection of rides and characters, bringing joy to every town they visit.`}  </Row>
        </Col>
      </Row>



      <Row  {...RowSettings}>
        {/* <div className={styles["column-back"]}></div> */}
        <Col {...textColSettings}>
          <Row justify='center'><b>Bin's Future home :</b></Row>
          <Row className={styles["modal-text-box-body"]}> {carnivalAtractions.description}</Row>
        </Col>
        <Col {...imageColSettings}>
          <img style={{ width: "100%" }} src={carnivalAtractions.img} alt={carnivalAtractions.alt}></img>
        </Col>

      </Row >

      <Row  {...RowSettings}>
        <Col  {...imageColSettings}>
          <img style={{ width: "100%" }} src={carnivalAtractions2.img} alt={carnivalAtractions2.alt}></img>
        </Col>
        <Col {...textColSettings}>
          <Row justify='center'><b>A Welcoming place :</b></Row>
          <Row className={styles["modal-text-box-body"]}>{carnivalAtractions2.description} </Row>
        </Col>
      </Row >


    </div >
  )
}

export default CarnivalContent