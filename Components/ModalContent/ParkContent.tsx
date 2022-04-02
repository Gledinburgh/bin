import { Row, Col } from 'antd'
import styles from '../../styles/Park.module.css'
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

  sun: ".3",
  treeLine: ".1",
  playGround: ".3",
  kids: ".5",
  tree: "1.5"

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
          {/* <div className={styles["sky-scene"]} id={styles["sun"]} >
            <img data-depth={depths.sunBack} id={styles["sun-back"]} src='./mockup/sun-back.png' />
            <img data-depth={depths.sunFace} id={styles["sun-face"]} src='./mockup/sun-face.png' />
          </div> */}
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


      <div id={styles["ground"]}>
        <div
          id={styles["mariposa-container"]}
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
          <img data-depth={depths.sun} className={styles["park-scene"]} id={styles["park-0"]} src='./mockup/park-0.png' />
          <img data-depth={depths.treeLine} className={styles["park-scene"]} id={styles["park-1"]} src='./mockup/park-1.png' />
          <img data-depth={depths.playGround} className={styles["park-scene"]} id={styles["park-2"]} src='./mockup/park-2.png' />
          <img data-depth={depths.kids} className={styles["park-scene"]} id={styles["park-3"]} src='./mockup/park-3.png' />
          <img data-depth={depths.tree} className={styles["park-scene"]} id={styles["park-4"]} src='./mockup/park-4.png' />

        </div>
      </div>
    </Row >


  )
}

export default ParkContent