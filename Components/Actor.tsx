import ImageMapper, { AreaEvent, CustomArea } from 'react-img-mapper';
import styles from '../styles/Actors.module.css'
import { useEffect, useState, useRef } from 'react'
import { actorDetails } from '../types';
import { GeneralContext } from '../Context/GeneralContext';
import Image from 'next/image'


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

  function generateContent(actorDetails: actorDetails) {
    var content = {
      main: <div></div>,
      shaddow: <div></div>,
      outline: <div></div>,
    };


    if (actorDetails.outline) {
      content.outline =
        <div
          className={styles["outline-wobble"]}
          id={styles[actorDetails.id + '-wobble']}>
        </div>

    }

    if (actorDetails.shaddow) {
      const { baseWidth, baseHeight, imgUrl } = actorDetails.shaddow

      content.shaddow =
        <div
          className={styles["shaddow"]}
          id={styles[actorDetails.id + '-shaddow']}
          data-attention={isAttention}>
          <Image src={imgUrl} width={scale * baseWidth} height={scale * baseHeight} layout="fixed"></Image>
        </div>

    }

    return content;
  }

  const content = generateContent(actorDetails);

  useEffect(() => {

    const interval = setInterval(() => {
      console.log("Actor:interval")
      if (isAttention !== "1") {
        setIsAttention("1")
        console.log("attention:", actorDetails.id)
      }
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
    <div>
      <div
        className={styles.actor}
        id={styles[actorDetails.id]}
        onAnimationEnd={() => setIsAttention('0')}
        data-attention={isAttention} >

        {content.outline}

        <ImageMapper
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseOver}
          onClick={onClickHandler}
          containerRef={divRef}
          width={calculateWidth(scale)}
          imgWidth={calculateWidth(scale)}
          fillColor="rgba(255, 255, 255, 0)"
          strokeColor="rgba(0,0,0,0)"
          src={URL}
          map={MAP} />
      </div>

      {content.shaddow}

    </div>



  )

}

export default Actor;