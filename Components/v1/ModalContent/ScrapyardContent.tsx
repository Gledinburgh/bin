import { Row, Col } from 'antd'
import styles from '../../../styles/v1/Modal.module.css'

import { scrapYardDetails } from '../../../data/v1/ModalDetails/scrapYardDetails'
import { BoxPlotFilled } from '@ant-design/icons'
const { intro, Eli, friend } = scrapYardDetails

const RowSettings: any = {
  justify: "center",
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


const ScrapyardContent = () => {
  return (

    <Row justify='center' align='middle'>
      <Col span={24}>
        <Row  {...RowSettings}>
          <Col span={20} className={styles["modal-text-box"]}>
            <Row justify='center'><h3 className={styles["title"]}>Eli</h3> </Row>
            <Row justify={"center"} className={styles["modal-text-box-body"]}><div className={styles["center"]}>{`A scruffy Garbage Man, and Bin's best freind!`} </div> </Row>
          </Col>
        </Row>



        <Row  {...RowSettings}>
          <div className={styles["column-back"]}></div>
          <Col {...textColSettings}>
            <Row justify='center'><b>Eli is a free spirit :</b></Row>
            <Row className={styles["modal-text-box-body"]}> {Eli.description} </Row>
          </Col>
          <Col {...imageColSettings}>
            <img style={{ width: "100%" }} src={Eli.img} alt={Eli.alt}></img>
          </Col>

        </Row >

        <Row  {...RowSettings}>
          <div className={styles["column-back"]}></div>
          <Col  {...imageColSettings}>
            <img style={{ width: "100%" }} className={styles["img"]} src={friend.img} alt={friend.alt}></img>
          </Col>
          <Col {...textColSettings}>
            <Row justify='center'><b>Eli is Bin's best Freind :</b></Row>
            <Row className={styles["modal-text-box-body"]}>Eli now spends his time looking after Bin a making sure he is always taken care of. </Row>
          </Col>
        </Row >
      </Col>


    </Row >
  )
}

export default ScrapyardContent