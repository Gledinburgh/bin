import styles from '../../styles/Modal.module.css'
import { Row, Col } from 'antd'
import TestContent from '../TestContent'
import { GeneralContext } from '../../Context/GeneralContext'
import ScrapyardContent from '../ModalContent/ScrapyardContent'
import CarnivalContent from '../ModalContent/CarnivalContent'
import ParkContent from '../ModalContent/ParkContent'
import PetShopContent from '../ModalContent/PetShopContent'
import { SyntheticEvent, useEffect, useRef, useState } from 'react';


const Modal = ({ visability, closeModal }: { visability: boolean, closeModal: (e: SyntheticEvent<HTMLElement>) => void, activeActor: string }) => {

  // const content = <ScrapyardContent />;
  const context = GeneralContext()
  const [content, setContent] = useState(<ScrapyardContent />);
  // const [currentActor, setCurrentActor] = useState("");

  const contentMap: any = {
    "scrapYard": <ScrapyardContent />,
    "carnival": <CarnivalContent />,
    "park": <ParkContent />,
    "test": <TestContent />,
    "petShop": <PetShopContent />
  }

  function handleContentChange(activeActor: string) {

    console.log("modal.tsx: handleContentChange fired", activeActor)

    let content: any = contentMap[activeActor];
    if (content) setContent(content)
    if (!content) setContent(contentMap["test"])

  }

  const modalRef: any = useRef(null);

  function closeOnEscapeDown(e: any) {

    if (visability && (e.key === "Escape")) {
      closeModal(e);
    }
  }

  useEffect(() => {
    console.log("useEffect: Modal")
    if (visability) {
      document.body.addEventListener('keydown', closeOnEscapeDown)
    }
    if (context.activeActor) {
      handleContentChange(context.activeActor)
    }

    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeDown)
    }


  }, [visability, context.activeActor])


  if (!visability) {
    return null;
  }


  return (
    <div onClick={closeModal} className={styles["modal"]}>

      <div ref={modalRef} onClick={e => e.stopPropagation()} className={styles["modal-content"]}>

        <Row justify='center' align='middle' className={styles["modal-Header"]}>
          <Col span={20} className={styles["modal-title"]}>
            <h4></h4>
          </Col>
          <Col span={3}>
            <button className={styles["modal-button"]} onClick={closeModal}>X</button>
          </Col>
        </Row>

        <Row className={styles["modal-body"]}>
          {content}
        </Row>

      </div>
    </div >
  )
}

export default Modal