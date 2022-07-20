import { Row, Col } from 'antd'
import styles from '../../../styles/v1/Park.module.css'
import modalStyles from '../../../styles/v1/Modal.module.css'

import { SyntheticEvent, useEffect, useRef, useState } from 'react'
import Parallax from 'parallax-js'

const depths = {

  // --- sky scene --- //
  sunBack: ".2",
  sunFace: ".3",
  clouds: "1",
  cloud1: "2",
  cloud2: "1",
  cloud3: ".8",

  // --- Ground scene --- //

  sun: "1",
  treeLine: "-.2",
  playGround: "-1.5",
  kids: "-2.2",
  bin: "2"

}

const ParkContent = () => {


  const [fly, setFly] = useState("0")
  const skyRef = useRef(null)
  const groundRef = useRef(null)

  function handleMariposaClick(e: SyntheticEvent): void {
    console.log("mariposaClick fired")
    if (fly !== "1") setFly("1")
  }

  function handleAnimationEnd(): void {
    setFly("0")
    console.log("mariposa animation end")
  }

  useEffect(() => {
    console.log("useEffect: ParkContent")

    const parallaxInstance = new Parallax(skyRef.current, { hoverOnly: true })
    const parallaxInstance2 = new Parallax(groundRef.current, { hoverOnly: true })

    parallaxInstance.enable();
    parallaxInstance2.enable();
    parallaxInstance.limit(100, 100)
    parallaxInstance2.limit(300, 300)

    return () => parallaxInstance.disable();
  }, [])


  return (
    <Row id={styles["scene"]} justify="center" align="middle">
      <Col ref={skyRef} id={styles["sky-container"]} >


        <img id={styles["plane"]} src='./mockup/plane.png' />

        <div data-depth={depths.sun}>
        </div>


      </Col >
      <div id={styles["gap"]}>.

      </div>

      <div ></div>


      <div id={styles["ground"]}>
        <img data-depth={0} className={styles["park-scene"]} id={styles["park-B"]} src='./ModalContent/Park/park-B-color.png' />


        <div
          id={styles["mariposa-container"]}
          data-depth={depths.sun}
          data-fly={fly}
          onAnimationEnd={() => handleAnimationEnd()}
          onClick={handleMariposaClick}
        >
          <div data-fly={fly} id={styles["z-axis"]}>
            <div data-fly={fly} id={styles["y-axis"]}>
              <div data-fly={fly} id={styles["mariposa"]} />
            </div>
          </div>
        </div>


        <div ref={groundRef} id={styles["park-container"]} >
          <img data-depth={0} className={styles["park-scene"]} id={styles["park-A"]} src='./ModalContent/Park/park-A-color.png' />
          <img data-depth={depths.sun} className={styles["park-scene"]} id={styles["park-0"]} src='./ModalContent/Park/park-0-color.png' />
          <img data-depth={depths.treeLine} className={styles["park-scene"]} id={styles["park-1"]} src='./ModalContent/Park/park-1-color.png' />
          <img data-depth={depths.playGround} className={styles["park-scene"]} id={styles["park-2"]} src='./ModalContent/Park/park-2-color.png' />
          <img data-depth={depths.kids} className={styles["park-scene"]} id={styles["park-3"]} src='./ModalContent/Park/park-3.png' />
          <img data-depth={depths.bin} className={styles["park-scene"]} id={styles["park-4"]} src='./ModalContent/Park/park-4-color.png' />

        </div>
      </div>
    </Row >


  )
}

export default ParkContent