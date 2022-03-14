import { NextComponentType } from "next";
import BinMapped from "./BinMapped";
import Actor from "./Actor";
import { Bin } from "../data/ActorDetails/Bin"
import { JunkYardDude } from "../data/ActorDetails/JunkYardDude"
import { PetShopDoor } from "../data/ActorDetails/PetShopDoor"
import { Poster } from "../data/ActorDetails/Poster"

import styles from '../styles/Grid.module.css'
import { actorDetails } from "../types";


const Grid = ({ modalSwitch }: { modalSwitch: Function }) => {

  const scale = 2.5;

  function nextChar(c: string) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }

  const letterArray: any = (size: number) => {
    var letters: string[] = [];
    var currentLetter = "a"
    for (let i = 0; i < size; i++) {
      letters.push(currentLetter);
      currentLetter = nextChar(currentLetter);
    }
    return letters;
  }

  const numberArray: any = (size: number) => {
    var numbers: number[] = [];
    var currentNumber = 1;

    for (let i = 0; i < size; i++) {
      numbers.push(currentNumber)
      currentNumber++
    }
    return numbers;
  }

  function CreateActor(actorDetails: actorDetails) {
    return (
      <Actor modalSwitch={modalSwitch} scale={scale} actorDetails={actorDetails} />
    )
  }

  const actorCoords: any = {
    //i6: <BinMapped modalSwitch={modalSwitch} />,
    i6: CreateActor(Bin),
    // h9: <img src="./mockup/dude.png" alt="image of Bin" id={styles.dude} className={styles.actor} />,
    h9: CreateActor(JunkYardDude),
    d6: CreateActor(Poster),
    i2: CreateActor(PetShopDoor),
  };

  return (

    <table className={styles["grid-container"]}>

      {
        letterArray(10).map((char: string) => {
          return (
            <tr key={char} className={styles.col}>
              {
                numberArray(10).map((num: number) => {

                  var currentCoord: string = char + num;
                  if (actorCoords[`${currentCoord}`]) {
                    return (
                      <td key={char + num} style={{ position: "relative" }}>
                        {actorCoords[currentCoord]}
                      </td>
                    )
                  }
                  else {
                    return (
                      <td key={currentCoord}>
                        {currentCoord}
                      </td>
                    )
                  }
                })
              }
            </tr>
          )
        })}
    </table>
  )

}

export default Grid;