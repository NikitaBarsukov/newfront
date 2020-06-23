import React from 'react'
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { AreaChartOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Home from './Home';
import Logs from './Logs';
import Analyser from './Analyser';
import Results from './Results';
import Userguide from './Userguide';
import Tech_specifications from './Tech_specifications';

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

class Mymenu extends React.Component{
	state = {
		collapsed: false,
	};

	onCollapse = collapsed => {
		console.log(collapsed);
		this.setState({ collapsed });
	};

	render() {
		return (
		<Layout style={{ minHeight: '100vh' }}>
			<Router>
				<Sider  theme = "light" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
					<div className="logo">
						{/* <Menu.Item  icon={<HomeOutlined />}></Menu.Item> */}
					</div>
					<Menu theme="light"defaultSelectedKeys={['/']} mode="inline">
						<Menu.Item key="/" icon={<HomeOutlined />}>
							<NavLink to="/" className="nav-text">Home</NavLink>
						</Menu.Item>
						<SubMenu key="sub1" icon={<AreaChartOutlined />} title="Analyser">
							<Menu.Item key="/logs">
								<NavLink to="/logs" className="nav-text">Logs</NavLink>
							</Menu.Item>
							<Menu.Item key="/analyser">
								<NavLink to="/analyser" className="nav-text">Analyser</NavLink>
							</Menu.Item>
							<Menu.Item key="/results">
								<NavLink to="/results" className="nav-text">Results</NavLink>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="sub2" icon={<InfoCircleOutlined />} title="About">
							<Menu.Item key="/userguide">
								<NavLink to="/userguide" className="nav-text">User guide</NavLink>
							</Menu.Item>
							<Menu.Item key="/tech_specifications">
								<NavLink to="/tech_specifications" className="nav-text">Tech.specifications</NavLink>
							</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Header className="site-layout-background" style={{ padding: 0 }} />
					<Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>

						</Breadcrumb>

						<div className="site-layout-background" style={{ padding: 24, minHeight: 400 }}>
							<Switch>
								<Route exact path='/' component={Home} />
								<Route path='/logs' component={Logs} />
								<Route path='/analyser' component={Analyser} />
								<Route path='/results' component={Results} />
								<Route path='/userguide' component={Userguide} />
								<Route path='/tech_specifications' component={Tech_specifications} />
							</Switch>
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>Saint-Petersburg Polytechnical University</Footer>
				</Layout>
			</Router>
		</Layout>
		);
	}
}

export default Mymenu