import React from 'react'
import './styles/component.css'
import { Breadcrumb, Carousel, Divider, Row, Col } from 'antd'
import pic1 from "./img/GHPicture1.jpg"
import pic2 from "./img/GHPicture2.jpg"
import pic3 from "./img/GHPicture3.jpg"
import pic4 from "./img/GHPicture4.jpg"
import pic5 from "./img/GHPicture5.jpg"
import pic6 from "./img/GHPicture6.jpg"
import pic7 from "./img/GHPicture7.jpg"

const Home = () => (
  <div>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      <Breadcrumb.Item>Startseite</Breadcrumb.Item>
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
      <div className="center-text">
        <h1>Global Horizons gibt dir die Möglichkeit Englisch online zu lernen.</h1>
      </div>
      <Divider />
      <Row align="top">
        <Col flex ={2}>
          <div className="image">
            <img src={pic7} alt="pic7"/>
          </div>
        </Col>
        <Col flex ={3}>
          <h2 className="center-text" style={{margin :20}}>
            Welchen Lehransatz verfolgen wir in unserer Schule?
          </h2>
          <p>
            In unserer Schule nutzen wir die aktive Kommunikation. 
            <br/>
            Bei diesem Ansatz wird angenommen, dass der Erwerb einer 
            Sprache durch den alltäglichen Gebrauch erlernt wird. 
            Eine Sprache kann nicht ausschließlich durch das monotone 
            Lernen von Vokabeln erworben werden. Des Weiteren tritt 
            die Auseinandersetzung mit Sprachbarrieren hierbei zu 
            weit in den Hintergrund, was trotz des Wortschatzes 
            oft vom möglichen Gebrauch der Sprache abhält.
            Unser grundlegendes Ziel ist es, dir die 
            Möglichkeit zu geben, angemessen in Englisch zu 
            kommunizieren. 
            <br/>
            Die Unterrichtsstunden werden so gestaltet, dass 
            du zum Gebrauch der Englischen Sprache 
            ermutigt wirst. Wir glauben, dass das Lernen nicht 
            nur zweckerfüllend, sondern auch spaßbringend 
            sein sollte. Während der Unterrichtsstunden werden 
            wir verschiedene Ansätze wie Rollenspiele, 
            Filmszenarien und häufige Dialoge anwenden.
          </p>
        </Col> 
      </Row>
      <figure className="quote">
        <blockquote>
          <h2>
            Du wirst von Anfang an Englisch sprechen, auch wenn du noch ein Neuling bist.
          </h2>
        </blockquote>
        </figure>
        <Divider />
        <div style={{margin : 20}}>
        <ul> 
          <strong>
            <li>
            <p>
              Alle unsere Lehrer haben Abschlüsse in Sprachwissenschaften 
              oder Zertifikate wie TESOL. Sie verbessern kontinuierlich 
              ihre Kompetenzen durch Seminare und Webinare.
            </p>
            </li>
            <li>
            <p>
              Im Mittelpunkt unseres Lehrvorgangs steht der Erwerb von 
              täglich benötigen Kommunikationsfähigkeiten.
            </p>
            </li>
            <li>
            <p>
              Wir fangen stets mit dem Festlegen von individuellen 
              und personenabhängigen Zielen an, welche die Umwelt 
              und den Kenntnisstand des jeweiligen Schülers bestmöglich 
              in den Lernprozess etablieren. Die Sprache wird im Kontext 
              von dir bekannten alltäglich Situationen präsentiert 
              und erlernt, wodurch dir das Lernen zusätzlich noch einfacher gelingt.
            </p>
            </li>
            </strong>
          </ul>
      </div>
    </div>
  </div>
);

export default Home;
