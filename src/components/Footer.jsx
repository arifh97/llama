import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../assets/img/footer-img.png'
import logo from '../assets/img/logo.png'
import style from '../assets/img/footer-style.png'
import Social from './Social'
export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row className='justify-content-center text-center'>
          <Col xs='12' md="10" xl="8" xxl='6'>
            <div className="footer-wrap">
              <div className="img">
                <img src={img} alt="" />
              </div>
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <p>Join the Llama Meme Coin revolution! Follow us on social media and stay updated on all developments.</p>
              <a href="#" className="btn">BUY LLAMA</a>
              <Social className=' justify-content-center'/>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={style} alt="" className='style' />
    </div>
  )
}
