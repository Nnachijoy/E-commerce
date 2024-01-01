
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BgShopping from "../../assets/BgShopping.png";
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <img className="background-image w-100 img-fluid" src={BgShopping} alt="" />
      <div className="overlay-card">
      <Card className=''>
      <Card.Body className='p-5'>
        <Card.Title>New Arrival</Card.Title>
        <Card.Subtitle className="mb-2">
  Discover Our <span className="d-none d-md-inline"> <br/> </span> New Collection
 
</Card.Subtitle>
        <Card.Text>
          No 1 trusted supplier for your shopping funiture needs
          stocked with the best quality and prices for your budget
        </Card.Text>
        <Button>Shop Now</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  );
};

export default Hero;
