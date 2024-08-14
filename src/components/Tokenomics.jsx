import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../assets/img/tokenomics-img.png'
import icon from '../assets/img/tokenomics-icon.png'

export default function Tokenomics() {
  return (
    <div className='tokenomics'>
      <Container>
        <Row>
          <Col xs="12">
            <div className="tokenomics-title">
              <h2>Tokenomics</h2>
              <span> <img src={icon} alt="" /> <p>Total Supply: 10,000,000,000 Llamas</p></span>
            </div>
          </Col>
          <Col xs='12' className='d-flex justify-content-center'>
            <div className="tokenomics-img">
              <img src={img} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
