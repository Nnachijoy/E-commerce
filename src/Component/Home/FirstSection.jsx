import React from 'react'
import './FirstSection.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dinning from "../../assets/Dinning.png";
import Living from "../../assets/Living.png";
import Bedroom from "../../assets/Bedroom.png";

const FirstSection = () => {
  return (
    <section>

        <div className='text-center browse'>
            <div className='range'>Browse The Range</div>
            <div className='range-text'>Find the item that best your need with our wide range of funiture.</div>
        </div>

        <Container className='mt-5'>
            <Row>
                <Col md={4} className='mr-md-3 mb-5'>
                <div>
                <img src={Dinning} alt=""  className='w-100 img-fluid'/>
                <h1 className='RangeItem'>Dinning</h1>
                </div>
                </Col>

                <Col md={4} className='mr-md-3 mb-5'>
                <div>
                <img src={Living} alt="" className='w-100 img-fluid'  />
                <h1 className='RangeItem'>Living</h1>
                </div>
                </Col>

                <Col md={4} className='mr-md-3 mb-5'>
                <div>
                <img src={Bedroom} alt=""  className='w-100 img-fluid'/>
                <h1 className='RangeItem'>Bedroom</h1>
                </div>
                </Col>

                
            </Row>
        </Container>
    </section>
  )
}

export default FirstSection