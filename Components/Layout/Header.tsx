
import styles from '../../styles/Home.module.css'
import { Row, Col } from 'antd'

const Header = () => {
  return (
    <Row className={styles.header}>
      <Col span={5}>
        <h1 className={styles.title}>
          Bin
        </h1>
      </Col>
      <Col span={19}>
        <nav>
          <ul id={styles.nav}>
            <li>Shop</li>
            |
            <li>About</li>
            |
            <li>Instagram</li>
          </ul>
        </nav>
      </Col>
    </Row>
  )
}

export default Header;