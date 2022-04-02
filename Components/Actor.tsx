import ImageMapper, { AreaEvent, CustomArea } from 'react-img-mapper';
import { NextComponentType } from "next";
import styles from '../styles/Grid.module.css'
import { useEffect, useState, useRef } from 'react'
import { devNull } from 'os';
import { actorDetails } from '../types';
import { GeneralContext } from '../Context/GeneralContext';



const Actor = (
  { modalSwitch, scale, actorDetails }:
    {
      modalSwitch: Function,
      scale: number,
      actorDetails: actorDetails,
    }
) => {

  const context = GeneralContext();

  var [MAP, setMAP] = useState({ ...actorDetails.map })
  var [isMouseOver, setIsMouseOver] = useState(false)
  var [isAttention, setIsAttention] = useState('0')

  const actorRef: any = useRef(null);

  const handleMouseOver = () => {
    setIsMouseOver(true)
  }



  const handleMouseLeave = () => {
    setIsMouseOver(false)
  }

  function applyScaleToCoord(coords: number[], scale: number): number[] {
    return coords.map((point) => {
      return point * scale;
    })
  }

  useEffect(() => {

    const interval = setInterval(() => {
      if (isAttention !== '1') setIsAttention('1')
    }, 7000)

    document.body.style.cursor = isMouseOver ? "pointer" : "default"

    console.log("useEfect: Actor")
    console.log("useEfect: Actor", scale)

    var baseCoordinates = actorDetails.map.areas[0].coords
    var newCoordinates = applyScaleToCoord(baseCoordinates, scale)
    var newMAP = JSON.parse(JSON.stringify(MAP));
    newMAP.areas[0].coords = newCoordinates;
    setMAP(newMAP)

    return () => clearInterval(interval)


  }, [scale, isMouseOver])

  function calculateWidth(scale: number) {
    //return actorDetails.baseWidth * scale;
    return actorDetails.baseWidth * scale


  }


  const divRef = useRef<HTMLDivElement>() as any;
  const URL = actorDetails.imgUrl ? actorDetails.imgUrl : "";

  function onClickHandler(area: CustomArea, index: number, event: AreaEvent) {
    context.handleActorChange(actorDetails.modal);
    modalSwitch();
  }

  return (
    <div className={styles.actor} id={styles[actorDetails.id]} onAnimationEnd={() => setIsAttention('0')} data-attention={isAttention} >
      <ImageMapper
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseOver}
        onClick={onClickHandler}
        containerRef={divRef}
        width={calculateWidth(scale)}
        imgWidth={calculateWidth(scale)} src={URL} map={MAP} />
    </div>

  )

}

export default Actor;