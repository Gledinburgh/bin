import styles from '../../styles/Modal.module.css'
import { Row, Col } from 'antd'
import TestContent from '../TestContent'
import { SyntheticEvent, useEffect, useRef } from 'react';


const Modal = ({ visability, modalSwitch, activeActor }: { visability: boolean, modalSwitch: (e: SyntheticEvent<HTMLElement>) => void, activeActor: string }) => {

  const content = <TestContent />;

  const modalRef: any = useRef(null);

  function closeOnEscapeDown(e: any) {
    console.log("escape Pressed")

    if (visability && (e.key === "Escape")) {
      modalSwitch(e);
    }
  }

  useEffect(() => {
    console.log("useEffect: Modal")
    if (visability) {
      document.body.addEventListener('keydown', closeOnEscapeDown)
      // document.body.style.overflow = 'hidden'
      // modalRef.current.style.overflow = 'unset'
    }

    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeDown)
      // document.body.style.overflow = 'unset'
    }
  }, [visability])


  if (!visability) {
    return null;
  }


  return (
    <div onClick={modalSwitch} className={styles["modal"]}>

      <div ref={modalRef} onClick={e => e.stopPropagation()} className={styles["modal-content"]}>

        <Row justify='center' align='middle' className={styles["modal-Header"]}>
          <Col span={20} className={styles["modal-title"]}>
            <h4></h4>
          </Col>
          <Col span={3}>
            <button className={styles["modal-button"]} onClick={modalSwitch}>X</button>
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