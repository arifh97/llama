import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Social from './Social'

import img from '../assets/img/banner-img.png'
import eth from '../assets/img/eth.png'
import usdt from '../assets/img/usdt.png'
import card from '../assets/img/card.png'
import woman from '../assets/img/woman.png'
import bnb from '../assets/img/bnb.png'
import exclamation from '../assets/img/exclamation.png'

export default function Banner() {
  const endDate = "2024-09-22";
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className='banner'>
      <Container>
        <Row className='align-items-center justify-content-center'>
          <Col lg="10" xl="5" xxl="7">
            <div className="banner-content text-center text-xl-start">
              <span>Chillin with the Herd</span>
              <h1>$LLAMA</h1>
              <p>Join the most relaxed crypto community and enjoy the laid-back world of Lazy Llama Coin.</p>
              <a href="" className="btn">BUY LLAMA</a>
              <Social className="justify-content-center justify-content-xl-start" />
              <img src={img} alt="" className="banner-img" />
            </div>
          </Col>
          <Col lg="8" xl="7" xxl="5" className='d-flex justify-content-center justify-content-xl-end'>
            <div className="banner-card text-center">
              <h4>LLAMA PRESALE IS NOW LIVE!</h4>
              <div className="date d-flex">
                {Object.entries(timeLeft).map(([unit, value], index) => (
                  <div className="single" key={index}>
                    <span className='d-block unit text-capitalize'>{unit}</span>
                    <span className='d-block time'>{value}</span>
                  </div>
                ))}
              </div>
              <p className="f-18 mb-3 mb-md-4">USDT RAISED: $520,320.46 / $543,440</p>
              <div className="line mx-auto">
                <span></span>
              </div>
              <p className='d-flex justify-content-center align-items-center gap-2 f-16 mb-2'>YOUR PURCHASED $Llama= 0 <img src={exclamation} alt="" /></p>
              <p className='d-flex justify-content-center align-items-center gap-2 f-16'>YOUR STAKEABLE $Llama= 0 <img src={exclamation} alt="" /></p>
              <p className='d-flex llama justify-content-center'><span>1 $LLAMA</span> <p>=</p> <span>$0.000445</span></p>
              <div className="paymentBtn Btn d-flex">
                <button className=''> <div className="inner d-flex align-items-center"><img src={eth} alt="" /> ETH</div></button>
                <button className=''> <div className="inner d-flex align-items-center"><img src={usdt} alt="" /> USDT</div></button>
                <button className=''> <div className="inner d-flex align-items-center"><img src={card} alt="" /> CARD</div></button>
              </div>
              <p className='pl'><p>ETH you pay</p> <p>Max</p> <p>$Llama you receive</p></p>
              <div className="cardBtn Btn d-flex flex-wrap">
                <div className="input-box">
                  <input type="text" name="" value={0} id="" />
                  <img src={eth} alt="" />
                </div>
                <div className="input-box">
                  <input type="text" name="" value={0} id="" />
                  <img src={woman} alt="" />
                </div>
                <button className=''> <div className="inner d-flex align-items-center justify-content-center">Connect Wallet</div></button>
                <button className=''> <div className="inner d-flex align-items-center justify-content-between"><img src={bnb} alt="" /> Buy with BNB</div></button>
              </div>
              <p className="lastP mx-auto">You do not have enough SOL to pay for this transaction.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
