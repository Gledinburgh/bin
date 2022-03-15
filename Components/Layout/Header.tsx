
import styles from '../../styles/Home.module.css'
import { Row, Col } from 'antd'

const Header = () => {
  return (
    <Row justify='start' align='middle'>
      <Col span={5} className={styles["title"]}>
        <h1 id={styles["title"]} style={{ margin: 0 }}>Bin</h1>
      </Col>
      <Col span={19}>
        <nav className={styles["nav"]}>
          <a>shop</a> | about | instagram
        </nav>
      </Col>
    </Row>
  )
}

export default Header;