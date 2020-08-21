import React from 'react'
import 'antd/dist/antd.css';
import './My_menu.css'
import './img/LogoGH.svg'
import { Layout, Menu, Breadcrumb } from 'antd';
import {HomeOutlined, UserOutlined, InfoCircleOutlined, BookOutlined} from '@ant-design/icons';
import Home from './Home';
import Logs from './Logs';
import Analyser from './Analyser';
import Results from './Results';
import Userguide from './Userguide';
import Tech_specifications from './Tech_specifications';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class Mymenu extends React.Component{
	render() {
		return (
		<Layout>
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
				<div className="logo">
					<img src="img/LogoGH.svg" alt="Logo" width="50" ></img>
				</div>
				<Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
					<Menu.Item key = "1" icon={<HomeOutlined />}>Home</Menu.Item>
					<Menu.Item key = "2" icon={<UserOutlined />}>Teachers</Menu.Item>
					<Menu.Item key = "3" icon={<InfoCircleOutlined />}>Contacts</Menu.Item>
					<SubMenu icon={<BookOutlined />} title="Eduacational programs">
						<Menu.ItemGroup title="Item 1">
            				<Menu.Item key="setting:1">Option 1</Menu.Item>
            				<Menu.Item key="setting:2">Option 2</Menu.Item>
          				</Menu.ItemGroup>
          				<Menu.ItemGroup title="Item 2">
            				<Menu.Item key="setting:3">Option 3</Menu.Item>
           	 				<Menu.Item key="setting:4">Option 4</Menu.Item>
          				</Menu.ItemGroup>
        			</SubMenu>
			  	</Menu>
			</Header>
			<Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
			  	</Breadcrumb>
			  	<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
					Hello
			  	</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Global Horizons© Online school of English</Footer>
		  </Layout>
		);
	}
}

export default Mymenu