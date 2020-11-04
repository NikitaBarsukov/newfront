import React from 'react'
import './styles/info.css'
import { Breadcrumb,Table, Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'

const { Column } = Table;

const data = [
	{
	  name: 'General English',
	  dur: '60 minutes',
	  level : 'Elemantary - Advanced',
	  price : '25€',
	},
	{
		name: 'Business English',
		dur: '60 minutes',
		level : 'Intermediate - Advanced',
		price : '30€',
	  },
	  {
		name: 'Englisch für spezielle Anlässe',
		dur: '60 minutes',
		level : 'Upper Intermediate - Advanced',
		price : '35€',
	  },
	  {
		name: 'Trinity, Cambridge and Language Certificate Exams',
		dur: '60 minutes',
		level : 'Upper Intermediate - Advanced',
		price : '35€',
	  },
	  {
		name: 'Akademisches English',
		dur: '60 minutes',
		level : 'Intermediate - Advanced',
		price : '35€',
	  },
	  {
		name: 'Junior von 4 bis 9',
		dur: '25 minutes',
		level : 'Basic - Intermediate',
		price : '15€',
	  },
	  {
		name: 'Für Jugendliche von 10 bis 16 Jahren',
		dur: '45 minutes',
		level : 'Elementary - Upper Intermediate',
		price : '20€',
	  },

  ];

const Prices = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Home</NavLink>
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>Prices</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
      		<h1 className="center-text">Prices</h1>
			  <Row>
				<Col lg={4} />
				<Col lg={16}>
					<Table dataSource={data} bordered>
						<Column title="Course name" dataIndex="name" key="name" />
						<Column title="Lesson duration" dataIndex="dur" key="dur" />
						<Column title="Education level" dataIndex="level" key="level" />
						<Column title="Price" dataIndex="price" key="price" />
					</Table>
				</Col>
				<Col lg={4} />
			</Row>
    	</div>
  	</div>
);

export default Prices;