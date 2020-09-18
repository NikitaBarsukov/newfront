import React from 'react'
import './styles/component.css'
import { Breadcrumb, Carousel, Divider, Row, Col } from 'antd'
import pic1 from "./img/GHPicture1.jpg"
import pic2 from "./img/GHPicture2.jpg"
import pic3 from "./img/GHPicture3.jpg"
import pic4 from "./img/GHPicture4.jpg"
import pic5 from "./img/GHPicture5.jpg"
import pic6 from "./img/GHPicture5.jpg"

const Home = () => (
  <div>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
      <Carousel autoplay height="300px">
        <div>
          <img src={pic1} alt ="pic1" width="100%" height="auto" />
        </div>
        <div>
          <img src={pic2} alt ="pic2" width="100%" height="auto" />
        </div>
        <div>
          <img src={pic3} alt ="pic3" width="100%" height="auto" />
        </div>
        <div>
          <img src={pic4} alt ="pic4" width="100%" height="auto" />
        </div>
        <div>
          <img src={pic5} alt ="pic5" width="100%" height="auto" />
        </div>
        <div>
          <img src={pic6} alt ="pic6" width="100%" height="auto" />
        </div>

      </Carousel>
      <div className="center-text" style={{margin : 50}}>
        <h1>Global Horizons gives you a possibility to learn English Online</h1>
      </div>
      <Divider />
      <Row align="top">
        <Col span={12}>
          <img src={pic4} alt="pic4" width="100%" />
        </Col>
        <Col span={12} >
          <h2 className="center-text" style={{margin :20}}>
            What approach we use in our language school?
          </h2>
          <p >
            In our school we use communicative approach. It assumes that
            language acquisition successfully comes through having real
            communication. Language cannot be learnt through simple
            memorization. Our main goal is to make you able to communicate
            in English. The lessons are designed in such a way that encourages
            the learners to use the target language. We believe that learning
            must be enjoyable. During the lessons we will have many different
            activities such as role plays, dramas and games.
          </p>
        </Col> 
      </Row>
      <figure className="quote">
        <blockquote>
          <h2>
            You will speak English from the first lesson even if you are a beginer.
          </h2>
        </blockquote>
        </figure>      
    </div>
  </div>
);

export default Home;
