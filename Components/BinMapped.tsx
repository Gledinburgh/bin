import ImageMapper, { AreaEvent, CustomArea, ImageMapperProps, MapAreas } from 'react-img-mapper';
import { NextComponentType } from "next";
import styles from '../styles/Grid.module.css'
import { useRef } from 'react'
import { devNull } from 'os';




const BinMapped = ({ modalSwitch }: { modalSwitch: Function }) => {

  const divRef = useRef<HTMLDivElement>() as any;
  const URL = "./mockup/bin.png"
  const scale = 2.5
  const areas: MapAreas[] = [{
    shape: "poly",
    coords: [15 / scale, 106 / scale, 23 / scale, 247 / scale, 148 / scale, 299 / scale, 367 / scale, 205 / scale, 355 / scale, 68 / scale, 270 / scale, 18 / scale]
  }]

  console.log("binMapped.tsx")

  const MAP = {
    "name": 'my-map',
    "areas": areas
  };
  console.log("Map: ", MAP)

  function onClickHandler(area: CustomArea, index: number, event: AreaEvent) {
    modalSwitch();
  }

  return (
    <div className={styles.actor} id={styles.bin}>
      <ImageMapper onClick={onClickHandler} containerRef={divRef} width={150} imgWidth={150} src={URL} map={MAP} />
    </div>

  )

}

export default BinMapped;