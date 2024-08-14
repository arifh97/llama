import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../assets/img/roadmap-img.png'
import icon from '../assets/img/roadmap-list-icon.png'
import cardStyle from '../assets/img/roadmap-card-style.svg'

export default function Roadmap() {
  const Roadmap = [
    {
      title: 'Q1 2024',
      list: [
        {
          listItem: 'Advanced Community Engagement Initiatives',
        },
        {
          listItem: ' Major Exchange Listings',
        },
        {
          listItem: ' Additional NFT Drops',
        },

      ]

    },
    {
      title: 'Q2 2025',
      list: [
        {
          listItem: 'Launch of Lazy Llama Coin',
        },
        {
          listItem: ' Initial NFT Collection Release',
        },
        {
          listItem: ' Community Meme Contests',
        },

      ]

    },
    {
      title: 'Q3 2025',
      list: [
        {
          listItem: 'Expansion of Charity Partnerships',
        },
        {
          listItem: 'Enhanced Interactive Website Features',
        },
        {
          listItem: ' Introduction of Llama-themed Games',
        },

      ]

    },
  ]
  return (
    <div className='roadmap'>
      <Container>
        <Row className='align-items-center'>
          <Col lg="6">
            <div className="roadmap-content text-center ">
              <h2>Our Roadmap</h2>
              <p>The Llama Meme Coin roadmap includes launch, community building, marketing campaigns, exchange listings, partnerships, NFTs, staking, and governance.</p>
              <img src={img} alt="" />
              <a href="" className="btn mx-auto">LLAMA WHITEPAPER</a>
            </div>
          </Col>
          <Col lg="6">
            <div className="roadmap-card ">
              <div className="line"></div>
              {Roadmap.map((item, index) => (
                <div className="roadmap-card-single" key={index}>
                  <img src={cardStyle} alt="" className="listStyle" />
                  <div className="inner">
                    <p>{item.title}</p>
                    <ul>
                      {item.list.map((item, index) =>(
                        <li key={index}> <img src={icon} alt="" /> {item.listItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
