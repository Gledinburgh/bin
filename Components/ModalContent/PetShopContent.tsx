import { Row, Col } from 'antd'
import Parallax from 'parallax-js'
import { useEffect, useRef } from 'react'

import styles from '../../styles/PetShop.module.css'

const depths = {
  door: "1",
  pedistal: ".52",
  terrarium: ".5",
  hermit: ".4",
  register: ".25",
  counter: ".2",
  poster: ".1",
  back: ".05",
}

const PetShopContent = () => {

  const sceneEl = useRef(null)

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      // relativeInput: true,
      hoverOnly: true
    })

    parallaxInstance.enable();
    parallaxInstance.limit(300, 300)

    return () => parallaxInstance.disable();
  }, [])

  return (


    <Row className={styles["scene"]} justify="center" align="middle">
      <Col ref={sceneEl} id={styles['petshop-container']}>
        <img data-depth={depths.back} id={styles["petshop-back"]} className={styles["petshop-scene"]} src='./mockup/petshop-back-color.png' />
        <img data-depth={depths.poster} id={styles["petshop-poster"]} className={styles["petshop-scene"]} src='./mockup/petshop-poster-color.png' />
        <img data-depth={depths.counter} id={styles["petshop-counter"]} className={styles["petshop-scene"]} src='./mockup/petshop-counter-color.png' />
        <img data-depth={depths.register} id={styles["petshop-register"]} className={styles["petshop-scene"]} src='./mockup/petshop-register-color.png' />
        <div id={styles["parallax-hermit"]} className={styles["petshop-scene"]} data-depth={depths.hermit}>
          <div id={styles["hermit-container"]} >
            <div id={styles["hermit-flip"]}  >
              <img id={styles["petshop-hermit"]} src='./mockup/petshop-hermit.png' />

            </div>
          </div>

        </div>
        <img data-depth={depths.terrarium} id={styles["petshop-terrarium"]} className={styles["petshop-scene"]} src='./mockup/petshop-terrarium.png' />
        <img data-depth={depths.pedistal} id={styles["petshop-pedistal"]} className={styles["petshop-scene"]} src='./mockup/petshop-pedistal.png' />
        <div id={styles["petshop-door-container"]} data-depth={depths.door}>
          <img id={styles["petshop-door"]} src='./mockup/petshop-doorway.png' />

        </div>
      </Col>

    </Row>




  )
}

export default PetShopContent