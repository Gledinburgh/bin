import { NextComponentType } from "next";

import styles from '../styles/Grid.module.css'


const Grid: NextComponentType = () => {

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

  return (


    <table className={styles["grid-container"]}>

      {
        letterArray(5).map((char: string) => {
          return (
            <tr key={char} className={styles.col}>
              {
                [1, 2, 3, 4, 5].map((num) => {

                  if ((char + num) === "d3") {
                    return (
                      <td style={{ position: "relative" }}>
                        <img src="./mockup/bin.png" alt="image of Bin"
                          id={styles.bin} className={styles.actor} />
                      </td>
                    )
                  }
                  if ((char + num) === "d4") {
                    return (
                      <td style={{ position: "relative" }}>
                        <img src="./mockup/dude.png" alt="image of Bin"
                          id={styles.dude} className={styles.actor} />
                      </td>
                    )
                  }
                  else {

                    return (
                      <td>
                        {char + num}
                      </td>
                    )
                  }
                }
                )
              }
            </tr>
          )

        })
      }
    </table>
  )

}

export default Grid;