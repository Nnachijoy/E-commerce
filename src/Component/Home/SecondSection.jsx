import React from 'react'
import './SecondSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FirstProduct  from "../../assets/FirstProduct.png";
import SecondProduct  from "../../assets/SecondProduct.png";
import ThirdProduct  from "../../assets/ThirdProduct.png";
import FourthProduct  from "../../assets/FourthProduct.png";
import FifthProduct  from "../../assets/FifthProduct.png";
import SixthProduct  from "../../assets/SixthProduct.png";
import SeventhProduct  from "../../assets/SeventhProduct.png";
import ShoppingHeartIcon  from "../../assets/ShoppingHeartIcon.png";

const SecondSection = () => {
  return (
    <section>
   <Container>
    <Row>
     

{/* <Col md={3} className='mr-md-3 mb-5'>
  <div className="card">
    <img src={FirstProduct} alt="" className="main-image" />

    <div className="discount">
      <span className="circle-text">-30%</span>
    </div>

    <div className="card-body">
      <h5 className="card-title">Syltherine</h5>
      <p className="card-text">Stylish cafe chair</p>

      <div className="price">
        <div className="card-price1">Rp 2.500.000</div>

        <div className="price-wrapper">
          <div className="price-slash"></div>
          <div className="card-price2">Rp 3.500.000</div>
        </div>
      </div>
    </div>
  </div>
</Col> */}

<Col md={3} className='mr-md-3 mb-5'>
  <div className="card-container">
    <div className="card">
      <img src={FirstProduct} alt="" className="main-image" />

      <div className="discount">
        <span className="circle-text">-30%</span>
      </div>

    
      <div className="add-to-cart-btn">Add to Cart</div>

      <div className="dark-overlay"></div>

      <div className="card-body">
        <div>
        <h5 className="card-title">Syltherine</h5>
        {/* <img src={ShoppingHeartIcon} alt="" className="" /> */}
        </div>
        <p className="card-text">Stylish cafe chair</p>

        <div className="price">
          <div className="card-price1">Rp 2.500.000</div>

          <div className="price-wrapper">
            <div className="price-slash"></div>
            <div className="card-price2">Rp 3.500.000</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Col>





      <Col  md={3}  className='mr-md-3 mb-5'>
      <div className="card">
      <img src={FourthProduct} alt="" />
      <div className="new">
      <span className="circle-text">New</span>
    </div>
  <div className="card-body">
    <h5 className="card-title">Leviasa</h5>
    <p className="card-text">
    Stylish cafe chair
    </p>

    <div className="price">
  <div className="card-price1">Rp 2.500.000</div>
  

  </div>
  </div>
</div>

      </Col>



      <Col  md={3}  className='mr-md-3 mb-5'>
      <div className="card">
      <img src={ThirdProduct} alt="" />
      <div className="discount">
      <span className="circle-text">-30%</span>
    </div>
  <div className="card-body">
    <h5 className="card-title">Lolito</h5>
    <p className="card-text">
    Luxury big sofa
    </p>

    <div className="price">
  <div className="card-price1">Rp 2.500.000</div>

  <div class="price-wrapper">
  <div class="price-slash"></div>
  <div class="card-price2">Rp 3.500.000</div>
</div>
  </div>
  </div>
</div>

      </Col>



      <Col  md={3}  className='mr-md-3 mb-5'>
      <div className="card">
      <img src={SecondProduct} alt="" />
      <div className="new">
      <span className="circle-text">New</span>
    </div>
  <div className="card-body">
    <h5 className="card-title">Respira</h5>
    <p className="card-text">
    Outdoor bar table
    </p>

    <div className="price">
  <div className="card-price1">Rp 2.500.000</div>
  

  </div>
  </div>
</div>

      </Col>

      
    </Row>
   </Container>
    </section>
  )
}

export default SecondSection