import React from 'react'
import './styles/info.css'
import { Breadcrumb,Table, Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'

const { Column } = Table;

const data = [
	{
	  info: 'Dauer des Kurses',
	  basic: '5 Monate',
	},
	{
		info: 'Dauer der Unterrichtseinheit',
		basic: '60 Minuten',
	  },
	  {
		info: 'Kompetenzniveaus',
		basic: 'B1 - C1',
	  },
	  {
		info: 'Gesamtpreis des Kurses',
		basic: '30€',
	  },
  ];

const Business = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Startseite</NavLink>
      		</Breadcrumb.Item>
			<Breadcrumb.Item>
				Kurse für Erwachsene
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>Business Englisch</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
			<h1 className="center-text">Business Englisch</h1>
			<p>
			Dieser Kurs entwickelt Ihre Englischkenntnisse und Ihr Selbstvertrauen für eine Vielzahl von Geschäftskontexten wie Präsentationen, Besprechungen und Verhandlungen. Der Lehrplan kombiniert praktische Fähigkeiten mit geschäfts- und branchenspezifischer Sprache, die auf Ihre Bedürfnisse angepasst ist. Dieses Programm konzentriert sich darauf, Ihr geschäftsbezogenes Englischvokabular zu entwickeln und Sie auf praktische Situationen vorzubereiten.
			</p>
			<Row>
				<Col lg={6} />
				<Col lg={12}>
					<Table dataSource={data} bordered>
						<Column title="Kursinformationen" dataIndex="info" key="info" />
						<Column title="Business Englisch" dataIndex="basic" key="basic" />
					</Table>
				</Col>
				<Col lg={6} />
			</Row>
    	</div>
  	</div>
);

export default Business;