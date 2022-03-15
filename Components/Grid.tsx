import { NextComponentType } from "next";
import Actor from "./Actor";
import { Bin } from "../data/ActorDetails/Bin"
import { JunkYardDude } from "../data/ActorDetails/JunkYardDude"
import { PetShopDoor } from "../data/ActorDetails/PetShopDoor"
import { Poster } from "../data/ActorDetails/Poster"

import styles from '../styles/Grid.module.css'
import { actorDetails } from "../types";
import { useEffect, useImperativeHandle, useState } from "react";

import { useBreakpoint } from '../Context/MediaQuery'
import { scales } from '../data/mediaQueries'



const Grid = ({ modalSwitch }: { modalSwitch: Function }) => {

  //to fetch the current media query
  const [scale, setScale] = useState(1)
  const breakPoints: any = useBreakpoint();

  console.log(Object.keys(breakPoints).map(media => breakPoints[media] ? media + 'Yes' : media + "no"))
  //find the largest acceptible media query

  function largestQuery(): number {
    let queryList = Object.keys(breakPoints);


    let queries = []
    for (let i = 0; i < queryList.length; i++) {
      let media = queryList[i];
      if (breakPoints[media]) {
        queries.push(Number(media))
      }
    }

    let sorted = queries.sort((a: number, b: number) => {
      return b - a
    })

    console.log("sorted")
    console.log(sorted)
    var key: string = String(sorted[0]);
    console.log("key:", key)
    if (scales[key]) {
      console.log("true")
      let scale: number = scales[key]
      console.log(scale)
      return scale
    }



    else {
      console.log("default scale")
      let scale = 3 / 10
      return scale

    }

  }




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
    g5: CreateActor(Bin),
    // h9: <img src="./mockup/dude.png" alt="image of Bin" id={styles.dude} className={styles.actor} />,
    i9: CreateActor(JunkYardDude),
    d6: CreateActor(Poster),
    e2: CreateActor(PetShopDoor),
  };

  useEffect(() => {
    console.log("useEffect: Grid")

    setScale(largestQuery());
  }, [scale, breakPoints])

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