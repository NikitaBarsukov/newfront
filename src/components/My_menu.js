import React from 'react';
import 'antd/dist/antd.css';
import './styles/component.css';
import './styles/footer.css';
import logooo from './img/GHLogo.png';
import { Layout, Menu, Row, Col } from 'antd';
import {InstagramOutlined}  from '@ant-design/icons';
import Home from './Home.js';
import Teachers from './Teachers.js';
import Contacts from './Contacts.js';
import Prices from './Prices.js';
import General from './General';
import Business from './Business';
import Specific from './Specific';
import Exam from './Exam';
import Family from './Family';
import Academic from './Academic';
import Adult from './Adult';
import { Route, NavLink, Switch } from 'react-router-dom';



const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class Mymenu extends React.Component{
	render() {
		return (
		<Layout>
			<Header style={{ position: 'fixed',theme: 'light', zIndex: 1, width: '100%' }}>
				<div className="logo">
				<a href="/">
					<img src={logooo} alt="Logo" width="100%" />
				</a>	
				</div>
				<Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
				<SubMenu  title="Adult courses">
            				<Menu.Item key="setting:1">
								<NavLink to="/general" className="nav-text">General English</NavLink>
							</Menu.Item>
            				<Menu.Item key="setting:2">
								<NavLink to="/business" className="nav-text">Business English</NavLink>
							</Menu.Item>
							<Menu.Item key="setting:3">
								<NavLink to="/specific" className="nav-text">English for Specific Purposes</NavLink>
							</Menu.Item>
							<Menu.Item key="setting:4">
								<NavLink to="/exam" className="nav-text">Exam preparation</NavLink>
							</Menu.Item>
							<Menu.Item key="setting:5">
								<NavLink to="/family" className="nav-text">Family English</NavLink>
								</Menu.Item>
							<Menu.Item key="setting:6">
								<NavLink to="/academic" className="nav-text">Academic English</NavLink>
							</Menu.Item>
					</SubMenu>
					<SubMenu  title="Junior courses">
            				<Menu.Item key="setting:7">
								<NavLink to="/kids" className="nav-text">Kids (from 3 to 5)</NavLink>
							</Menu.Item>
							<Menu.Item key="setting:8">
								<NavLink to="/primary" className="nav-text">Primary (from 6 to 9)</NavLink>
							</Menu.Item>
            				<Menu.Item key="setting:9">
								<NavLink to="/secondary" className="nav-text">Secondary (from 10 to 12)</NavLink>
							</Menu.Item>
							<Menu.Item key="setting:10">
								<NavLink to="/secondary_plus" className="nav-text">Secondary Plus (from 13 to 17)</NavLink>
							</Menu.Item>
					</SubMenu>
					<Menu.Item key = "2">
						<NavLink to="/prices" className="nav-text">Prices</NavLink>
					</Menu.Item>
					<Menu.Item key = "3">
						<NavLink to="/teachers" className="nav-text">Teachers</NavLink>
					</Menu.Item>

					<Menu.Item key = "4">
						<NavLink to="/contacts" className="nav-text">Contacts</NavLink>
					</Menu.Item>
        			
			  	</Menu>
			</Header>
			<Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/teachers' component={Teachers} />
						<Route path='/contacts' component={Contacts} />
						<Route path='/prices' component={Prices} />
						<Route path='/specific' component={Specific} />
						<Route path='/business' component={Business} />
						<Route path='/general' component={General} />
						<Route path='/exam' component={Exam} />
						<Route path='/family' component={Family} />
						<Route path='/academic' component={Academic} />
						<Route path='/adult' component={Adult} />
						<Route path='/kids' component={Business} />
						<Route path='/primary' component={Business} />
						<Route path='/secondary' component={Business} />
						<Route path='/secondary_plus' component={Business} />
					</Switch>
			</Content>
			<Footer id="footer" className="dark">
      			<div className="footer-wrap">
        			<Row>
         				<Col lg={8} sm={24} xs={24}>
           					<div className="footer-center">
              					<h2 className="text">Global Horizons</h2>
								<h3 className="text">Online school of English</h3>
            					<div>
									<NavLink to="/adult" className="nav-text">Adult Courses</NavLink>	
              					</div>
								<div>
									<NavLink to="/junior" className="nav-text">Junior Courses</NavLink>
								</div>
								<div>
									<NavLink to="/prices" className="nav-text">Prices</NavLink>
								</div>
								<div>
									<NavLink to="/teachers" className="nav-text">Teachers</NavLink>
								</div>
							</div>
          				</Col>
          				<Col lg={8} sm={24} xs={24}>
           					<div className="footer-center">
              					<h2 className="text">Contact information</h2>
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
					<Col lg={2} sm={24} />
						<Col lg={20} sm={24}>
							<span style={{ marginRight: 12 }}>Global Horizons</span>
							<span style={{ marginRight: 12 }}>Copyright © </span>
						</Col>
					<Col lg={2} sm={24} />
				</Row>
			</Footer>
		</Layout>
		);
	}
}

export default Mymenu