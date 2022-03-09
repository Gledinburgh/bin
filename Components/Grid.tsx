import { NextComponentType } from "next";
import BinMapped from "./BinMapped";

import styles from '../styles/Grid.module.css'


const Grid = ({ modalSwitch }: { modalSwitch: Function }) => {



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

  const actorCoords: any = {
    i6: <BinMapped modalSwitch={modalSwitch} />,
    h9: <img src="./mockup/dude.png" alt="image of Bin" id={styles.dude} className={styles.actor} />
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