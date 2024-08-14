import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../assets/img/about-img.png'

export default function About() {
  return (
    <div className='about'>
      <Container>
        <Row>
          <Col xs="12">
            <div className="about-title">
              <h2>About</h2>
            </div>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col lg="6" className='d-flex justify-content-center'>
            <div className="about-img">
              <img src={img} alt="" />
            </div>
          </Col>
          <Col lg="6">
            <div className="about-content">
              <h3>What is Lazy Llama Coin?</h3>
              <p>Lazy Llama Coin (LLAMA) is a unique cryptocurrency that promotes a stress-free, fun approach to digital finance. Inspired by the laid-back nature of llamas, LLAMA offers a tranquil and enjoyable experience for all its users. Whether you're here for the communitythe memes, or the llamas, Lazy Llama Coin welcomes you with open hooves.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
