import Actor from "./Actor";
import { Bin } from "../../data/ActorDetails/Bin"
import { JunkYardDude } from "../../data/ActorDetails/JunkYardDude"
import { PetShopDoor } from "../../data/ActorDetails/PetShopDoor"
import { Poster } from "../../data/ActorDetails/Poster"
import { Awning } from "../../data/ActorDetails/Awning";

import styles from '../../styles/v1/Canvas.module.css'
import { actorDetails } from "../../types";
import { useEffect, useRef, useState } from "react";

import { getScale } from '../../Context/MediaQuery'
import { map2DArray } from '../../Utility/gridUtility'




const Canvas = (
  { openModal }:
    { openModal: Function }
) => {

  const cropRef: any = useRef(null)
  const gridRef: any = useRef(null)
  const [initialPosition, setInitialPosition] = useState(true)

  const scrollTo = () => {
    let size = gridRef.current.getBoundingClientRect()
    console.log("size:", size)
    cropRef.current.scrollLeft += (size.width / 15)
    cropRef.current.scrollTop += (size.height);
    setInitialPosition(true)
  }

  //Get's scale based off of media query
  const scale: any = getScale();
  //creates a letter an number array to be uses for grid
  const { letterArray, numberArray } = map2DArray(10)

  function CreateActor(actorDetails: actorDetails) {
    return (
      <Actor
        modalSwitch={openModal}
        scale={scale}
        actorDetails={actorDetails} />
    )
  }

  const actorCoords: any = {
    // h5: CreateActor(BinShaddow),
    g4: CreateActor(Bin),
    e1: CreateActor(Awning),
    h8: CreateActor(JunkYardDude),
    e5: CreateActor(Poster),
    f2: CreateActor(PetShopDoor),
  };

  useEffect(() => {
    if (initialPosition) {
      scrollTo();
    }
    console.log("useEffect: Canvas")
  }, [scale])

  return (

    <div ref={cropRef} id={styles["crop"]}>
      <table ref={gridRef} className={styles["grid-container"]}>

        {
          letterArray.map((char: string) => {
            return (
              <tr key={char} className={styles.col}>
                {
                  numberArray.map((num: number) => {

                    var currentCoord: string = char + num;
                    if (actorCoords[`${currentCoord}`]) {
                      return (
                        <td key={currentCoord} style={{ position: "relative" }}>
                          {actorCoords[currentCoord]}
                        </td>
                      )
                    }
                    else {
                      return (
                        <td key={currentCoord}>
                          <span className={styles["coord"]} >
                            {/* {currentCoord} */}
                          </span>
                        </td>
                      )
                    }
                  })
                }
              </tr>
            )
          })}
      </table >
    </div>


  )

}

export default Canvas;