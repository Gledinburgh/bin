import { NextComponentType } from "next";
import Actor from "./Actor";
import { Bin } from "../data/ActorDetails/Bin"
import { JunkYardDude } from "../data/ActorDetails/JunkYardDude"
import { PetShopDoor } from "../data/ActorDetails/PetShopDoor"
import { Poster } from "../data/ActorDetails/Poster"
import { Awning } from "../data/ActorDetails/Awning";

import styles from '../styles/Grid.module.css'
import { actorDetails } from "../types";
import { useEffect } from "react";

import { getScale } from '../Context/MediaQuery'
import { map2DArray } from '../Utility/gridUtility'



const Grid = (
  { openModal }:
    { openModal: Function }
) => {



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
    f5: CreateActor(Bin),
    b1: CreateActor(Awning),
    i9: CreateActor(JunkYardDude),
    d6: CreateActor(Poster),
    d1: CreateActor(PetShopDoor),
  };

  useEffect(() => {
    console.log("useEffect: Grid")
  }, [scale])

  return (

    <table className={styles["grid-container"]}>

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
  )

}

export default Grid;