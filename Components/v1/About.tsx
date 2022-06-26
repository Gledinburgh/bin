import styles from '../../styles/v1/About.module.css'
import { Row, Col } from 'antd';
import { useEffect } from 'react';

const About = ({ isVisible }: { isVisible: boolean }) => {

  const p1 = `This is a story about a dumpster named Binjamin, But you can call him Bin for short, and his impossible dream to fly. I know it sounds a little out there but let me tell you how this idea came to me.`
  const p2 = `In 2017 I moved back to Texas from California after feeling defeated over failed ambitions of making it big and started working at a small warehouse. One day on my 15min break I was standing in the ally when I heard a dump truck pull and started to connect with the dumpster. As the dumpster was being picked up to be emptied the image of a parent lifting up their child to play airplane popped into my head. I told myself this has to be that dumpster's favorite moment of the week. I laughed and thought "What if that dumpster wishes it could fly?" This dumpster who spends most of his life on the ground in the hot sun gets to finally see over the fence, a little further down the street, and most of all it gets closer to the sky for a brief moment.`
  const p3 = `It sounds strange but I started to feel for that dumpster! I realized that my feelings of failure and self-judgment led me to relate to the life of a dumpster who gets dumped on all week and looks forward to these brief moments of respite. I wanted to create a story that gives a better ending to a dumpster's experience (aka my experience). This story shares the experience of a dumpster with an impossible dream to fly and in the end, finds a dream he could not have expected!`
  const p4 = `Thank you so much for your time! I hope you enjoy the story!`

  useEffect(() => {
    console.log("useEffect:", "About")
    if (isVisible) {

    }

  }, [isVisible]);

  if (!isVisible) {
    console.log("not visible")
    return null;
  }

  console.log("is visible")
  return (

    < div
      id={styles["wrapper"]}

    >
      <h2 id={styles["welcome"]}>Welcome!</h2>
      <section id={styles["content"]}>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
      </section>
      <Row justify='end'>
        <Col span={14}>
          <img className={styles["signature"]} src="./Stage/signature.png" />
        </Col>
      </Row>

    </div >
  )
}

export default About;