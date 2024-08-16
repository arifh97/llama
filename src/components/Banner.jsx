import { Container, Row, Col } from 'react-bootstrap'
import Social from './Social'
import img from '../assets/img/banner-img.png'


export default function Banner() {
  return (
    <div className='banner v2'>
      <Container>
        <Row className='align-items-center justify-content-center'>
          <Col xs="12" className='d-flex justify-content-center'>
            <div className="banner-content w-100">
              <div className="title">
                <span>Chillin with the Herd</span>
                <h1>$LLAMA</h1>
              </div>
              <div className="wrap d-flex align-items-center justify-content-center">
                <Social className="flex-lg-column" />
                <img src={img} alt="" className="banner-img" />
                <div className="text">
                  <p>Join the most relaxed crypto community and enjoy the laid-back world of Lazy Llama Coin.</p>
                  <a href="" className="btn">BUY LLAMA</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
