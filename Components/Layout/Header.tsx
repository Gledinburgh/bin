
import styles from '../../styles/Home.module.css'
import { Row, Col } from 'antd'

const Header = () => {
  return (
    <Row id="header-container" justify='start' align="bottom">
      <Col span={5} >
        <span id={styles["title"]} >Bin</span>
      </Col>
      <Col span={19}>
        <nav id={styles["nav"]}>
          <span>
            <a>shop</a> | <a>about</a> | <a>instagram</a>
          </span>
        </nav>
      </Col>
    </Row>
  )
}

export default Header;