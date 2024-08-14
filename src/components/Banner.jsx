import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Social from './Social'
import img from '../assets/img/banner-img.png'

export default function Banner() {
  return (
    <div className='banner'>
      <Container>
        <Row>
          <Col lg="7">
            <div className="banner-content">
              <span>Chillin with the Herd</span>
              <h1>$LLAMA</h1>
              <p>Join the most relaxed crypto community and enjoy the laid-back world of Lazy Llama Coin.</p>
              <a href="" className="btn">BUY LLAMA</a>
              <Social />
              <img src={img} alt="" className="banner-img d-none" />
            </div>
          </Col>
          <Col lg="5">
            <div className="banner-card">

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
