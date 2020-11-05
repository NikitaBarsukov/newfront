import React from 'react'
import './styles/info.css'
import { Breadcrumb,Table, Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'

const { Column } = Table;

const data = [
	{
	  name: 'Allgemeines Englisch',
	  dur: '60 Minuten',
	  level : 'A1 - C1',
	  price : '25€',
	},
	{
		name: 'Business Englisch',
		dur: '60 Minuten',
		level : 'B1 - C1',
		price : '30€',
	  },
	  {
		name: 'Englisch für spezielle Anlässe',
		dur: '60 Minuten',
		level : 'B1 - C1',
		price : '35€',
	  },
	  {
		name: 'Trinity, Cambridge und Sprachzertifikatsprüfungen',
		dur: '60 Minuten',
		level : 'B1 - C1',
		price : '35€',
	  },
	  {
		name: 'Akademisches Englisch',
		dur: '60 Minuten',
		level : 'B1 - C1',
		price : '35€',
	  },
	  {
		name: 'Junior von 4 bis 9',
		dur: '25 Minuten',
		level : 'A1 - B1',
		price : '15€',
	  },
	  {
		name: 'Für Jugendliche von 10 bis 16 Jahren',
		dur: '45 Minuten',
		level : 'A1 - B1',
		price : '20€',
	  },

  ];

const Prices = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Startseite</NavLink>
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>Preise</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
      		<h1 className="center-text">Kursinformationen</h1>
			  <Row>
				<Col lg={4} />
				<Col lg={16}>
					<Table dataSource={data} bordered>
						<Column title="Kurs" dataIndex="name" key="name" />
						<Column title="Kursdauer" dataIndex="dur" key="dur" />
						<Column title="Kompetenzniveau" dataIndex="level" key="level" />
						<Column title="Preise" dataIndex="price" key="price" />
					</Table>
				</Col>
				<Col lg={4} />
			</Row>
    	</div>
  	</div>
);

export default Prices;