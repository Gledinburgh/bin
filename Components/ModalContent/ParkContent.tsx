import { Row, Col } from 'antd'
import styles from '../../styles/Modal.module.css'
import { useEffect, useRef } from 'react'
import Parallax from 'parallax-js'

const depths = {
  sun: ".5",
  sunBack: ".2",
  sunFace: ".3",
  clouds: "1",
  cloud1: "2",
  cloud2: "1",
  cloud3: ".8"
}

const ParkContent = () => {

  const skyRef = useRef(null)

  useEffect(() => {
    const parallaxInstance = new Parallax(skyRef.current, {
      // relativeInput: true,
      hoverOnly: true
    })

    parallaxInstance.enable();
    parallaxInstance.limit(100, 100)

    return () => parallaxInstance.disable();
  }, [])


  return (
    <Row id={styles["scene"]} justify="center" align="middle">
      <Col ref={skyRef} id={styles["sky-container"]} >
        <div data-depth={depths.sun}>
          <div className={styles["sky-scene"]} id={styles["sun"]} >
            <img data-depth={depths.sunBack} id={styles["sun-back"]} src='./mockup/sun-back.png' />
            <img data-depth={depths.sunFace} id={styles["sun-face"]} src='./mockup/sun-face.png' />
          </div>
        </div>
        {/* <div id={styles["clouds-parallax"]}> */}
        <img data-depth={depths.cloud3} className={styles["clouds"]} src='./mockup/cloud-3.png'></img>
        <img data-depth={depths.cloud2} className={styles["clouds"]} src='./mockup/cloud-2.png'></img>
        <img data-depth={depths.cloud1} className={styles["clouds"]} src='./mockup/cloud-1.png'></img>
        {/* </div> */}

      </Col >
      <div id={styles["gap"]}>.

      </div>

      <div ></div>


      <div>
        <img style={{ width: "100%" }} src='./mockup/bench.png' />
      </div>
    </Row>


  )
}

export default ParkContent