import React from 'react'
import 'antd/dist/antd.css';
import './component.css'
import logooo from './img/GHLogo.png';
import { Layout, Menu } from 'antd';
import {HomeOutlined, UserOutlined, InfoCircleOutlined, BookTwoTone} from '@ant-design/icons';
import Home from './Home';
import Teachers from './Teachers.js';
import Analyser from './Analyser';
import Results from './Results';
import Userguide from './Userguide';
import Tech_specifications from './Tech_specifications';
import { Route, NavLink, Switch } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class Mymenu extends React.Component{
	render() {
		return (
		<Layout>
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
				<div className="logo">
				<a href="/">
					<img src={logooo} alt="Logo" width="100%" />
				</a>	
				</div>
				<Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
					<Menu.Item key = "1" icon={<HomeOutlined />}>
						<NavLink to="/" className="nav-text">Для кого!!!</NavLink>
					</Menu.Item>
					<SubMenu icon={<BookTwoTone />} title="Тарифы!">
						<Menu.ItemGroup title="Уровни взаимодействия">
            				<Menu.Item key="setting:1">Делаешь все самостоятельно</Menu.Item>
            				<Menu.Item key="setting:2">Под наблюдением куратора</Menu.Item>
							<Menu.Item key="setting:3">Полный доступ</Menu.Item>
          				</Menu.ItemGroup>
          				<Menu.ItemGroup title="По скорости образования">
           	 				<Menu.Item key="setting:4">Интенсивный курс</Menu.Item>
							<Menu.Item key="setting:5">Обычный темп</Menu.Item>
							<Menu.Item key="setting:6">Размеренная жизнь (для улиток)</Menu.Item>
          				</Menu.ItemGroup>
					</SubMenu>
					<Menu.Item key = "2" icon={<UserOutlined />}>
						<NavLink to="/teachers" className="nav-text">Teachers</NavLink>
					</Menu.Item>

					<Menu.Item key = "3" icon={<InfoCircleOutlined />}>
						<NavLink to="/contacts" className="nav-text">Contacts</NavLink>
					</Menu.Item>
        			
			  	</Menu>
			</Header>
			<Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/teachers' component={Teachers} />
						<Route path='/contacts' component={Analyser} />
						<Route path='/results' component={Results} />
						<Route path='/userguide' component={Userguide} />
						<Route path='/tech_specifications' component={Tech_specifications} />
					</Switch>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Global Horizons© Online school of English</Footer>
		  </Layout>
		);
	}
}

export default Mymenu