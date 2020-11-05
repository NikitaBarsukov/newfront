import React from 'react';
import 'antd/dist/antd.css';
import './styles/component.css';
import './styles/footer.css';
import logooo from './img/GHLogo.png';
import { Layout, Menu, Row, Col } from 'antd';
import {InstagramOutlined}  from '@ant-design/icons';
import Home from './Home.js';
import Contacts from './Contacts.js';
import Prices from './Prices.js';
import General from './General';
import Business from './Business';
import Specific from './Specific';
import Exam from './Exam';
import Academic from './Academic';
import Adult from './Adult';
import Kids from './Kids';
import Primary from './Primary';
import { Route, NavLink, Switch } from 'react-router-dom';



const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class Mymenu extends React.Component{
	render() {
		return (
		<Layout>
			<Header className="site-layout-background" style={{ background: '#ffffff', position: 'fixed',theme: 'light', zIndex: 1, width: '100%' }}>
				<div className="logo">
					<a href="/">
						<img src={logooo} alt="Logo" width="100%" />
					</a>	
				</div>
				<Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
					<SubMenu  title="Kurse für Erwachsene" >
								<Menu.Item key="setting:1">
									<NavLink to="/general" className="nav-text">Allgemeines Englisch</NavLink>
								</Menu.Item>
								<Menu.Item key="setting:2">
									<NavLink to="/business" className="nav-text">Business Englisch</NavLink>
								</Menu.Item>
								<Menu.Item key="setting:3">
									<NavLink to="/specific" className="nav-text">Englisch für spezielle Anlässe</NavLink>
								</Menu.Item>
								<Menu.Item key="setting:4">
									<NavLink to="/exam" className="nav-text">Trinity, Cambridge und Sprachzertifikatsprüfungen</NavLink>
								</Menu.Item>
								<Menu.Item key="setting:6">
									<NavLink to="/academic" className="nav-text">Akademisches English</NavLink>
								</Menu.Item>
						</SubMenu>
						<SubMenu  title="Kurse für Kinder">
								<Menu.Item key="setting:7">
									<NavLink to="/kids" className="nav-text">Junior von 4 bis 9</NavLink>
								</Menu.Item>
								<Menu.Item key="setting:8">
									<NavLink to="/primary" className="nav-text">Für Jugendliche von 10 bis 16 Jahren</NavLink>
								</Menu.Item>
						</SubMenu>
						<Menu.Item key = "2">
							<NavLink to="/prices" className="nav-text">Preise</NavLink>
						</Menu.Item>
						<Menu.Item key = "4">
							<NavLink to="/contacts" className="nav-text">Kontakt</NavLink>
						</Menu.Item>
			  	</Menu>
			</Header>
			<Content className="site-layout" style={{ padding: '0 5%', marginTop: 64, marginBottom: 32}}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/contacts' component={Contacts} />
						<Route path='/prices' component={Prices} />
						<Route path='/specific' component={Specific} />
						<Route path='/business' component={Business} />
						<Route path='/general' component={General} />
						<Route path='/exam' component={Exam} />
						<Route path='/academic' component={Academic} />
						<Route path='/adult' component={Adult} />
						<Route path='/kids' component={Kids} />
						<Route path='/primary' component={Primary} />
					</Switch>
			</Content>
			<Footer id="footer" className="dark">
      			<div className="footer-wrap">
        			<Row>
         				<Col lg={8} sm={24} xs={24}>
           					<div className="footer-center">
              					<h2 className="text">Global Horizons</h2>
								<h3 className="text">Online Schule für Englisch</h3>
            					<div>
									<NavLink to="/adult" className="nav-text">Adult Courses</NavLink>	
              					</div>
								<div>
									<NavLink to="/junior" className="nav-text">Kurse für Kinder</NavLink>
								</div>
								<div>
									<NavLink to="/prices" className="nav-text">Preise</NavLink>
								</div>
							</div>
          				</Col>
          				<Col lg={8} sm={24} xs={24}>
           					<div className="footer-center">
              					<h2 className="text">Kontakt</h2>
              					<div>
								  <a href = "mailto: info.globalhorizons@gmail.com">info.globalhorizons@gmail.com</a>
            					</div>
								<div className="social">
									<a href="https://www.instagram.com/global.horizons/" target="_blank" rel="noopener noreferrer">
										<InstagramOutlined />
									</a>
								</div>
							</div>	
          				</Col>
						<Col lg={8} sm={24} xs={24}>
            				<div className="footer-center">
            					<div className="title-icon">
									<a href="/">
										<img src={logooo} alt="Logo" width="100%" />
									</a>	
								</div>
							</div>
          				</Col>
       				</Row>
      			</div>
				<Row className="bottom-bar">
					<Col lg={7} />
					<Col lg={10}>
						<span textAlign>Global Horizons Copyright © </span>
					</Col>
					<Col lg={7} />
				</Row>
			</Footer>
		</Layout>
		);
	}
}

export default Mymenu