import React from 'react'
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { SettingOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;


class App extends React.Component {
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
			<Sider  theme = "light" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
			<div className="logo">
			{/* <Menu.Item  icon={<HomeOutlined />}></Menu.Item> */}
			</div>
			<Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
				<Menu.Item key="1" icon={<HomeOutlined />}>
				Home
				</Menu.Item>

				<SubMenu key="sub1" icon={<SettingOutlined />} title="Analyser">
				<Menu.Item key="2">Logs</Menu.Item>
				<Menu.Item key="3">Analyser</Menu.Item>
				<Menu.Item key="4">Results</Menu.Item>
				</SubMenu>
				<SubMenu key="sub2" icon={<InfoCircleOutlined />} title="About">
				<Menu.Item key="5">User guide</Menu.Item>
				<Menu.Item key="6">Tech. specifications</Menu.Item>
				</SubMenu>
			</Menu>
			</Sider>
		<Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Our App will be here.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Saint-Petersburg Polytechnical University</Footer>
        </Layout>
      </Layout>
		);
	}
}



/* class App extends React.Component {
	handleClick = e => {
		console.log('click ', e);
	};

	render(){	
		return (
		<Menu
			onClick={this.handleClick}
			style={{ width: 256 }}
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['sub1']}
			mode="inline"
		>
			<SubMenu
			key="sub1"
			title={
				<span>
				<HomeOutlined />
				<span>Home</span>
				</span>
			}
			>
				<Menu.Item key="1">Basic info</Menu.Item>
			</SubMenu>

			<SubMenu key="sub2" icon={<SettingOutlined />} title="Analizer">
				<Menu.Item key="2">Logs</Menu.Item>
				<Menu.Item key="3">Analyzer</Menu.Item>
				<Menu.Item key="4">Results</Menu.Item>
			</SubMenu>
			<SubMenu
			key="sub4"
			title={
				<span>
					<InfoCircleOutlined />
					<span>About</span>
				</span>
			}
			>
				<Menu.Item key="5">User guide</Menu.Item>
				<Menu.Item key="6">Technical specification</Menu.Item>
			</SubMenu>
		</Menu>
		);
	}
} */

export default App