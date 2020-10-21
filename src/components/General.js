import React from 'react'
import './styles/info.css'
import { Breadcrumb,Table, Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'

const { Column, ColumnGroup } = Table;

const data = [
	{
	  info: 'Duration of a course',
	  basic: '7 months',
	  pro: '5 months',
	},
	{
		info: 'Duration of the lesson',
		basic: '45 minutes',
		pro: '60 minutes',
	  },
	  {
		info: 'Eduacational levels',
		basic: 'Pre Intermediate - Advanced',
		pro: 'Elementary - Advanced',
	  },
	  {
		info: 'Price for the whole course',
		basic: '20€',
		pro: '25€',
	  },
  ];

const General = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Home</NavLink>
      		</Breadcrumb.Item>
			<Breadcrumb.Item>
        		Adult courses
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>General English</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
			<h1 className="center-text">General English</h1>
			<p>
			Unser beliebtester Kurs eignet sich für alle Sprachniveaus. Die Kurse richten 
			sich an alle Erwachsenen, die ihre Kernkompetenzen verbessern möchten - Zuhören, 
			Lesen, Schreiben und Sprechen (einschließlich Aussprache). Wenn Sie ein gutes 
			Verständnis von Englisch beim Lesen, Unterhalten oder Reisen erlangen möchten, 
			ist einer unserer allgemeinen Englischkurse die richtige Wahl für Sie.
			<br/>
			<br/>
			Dieses Englischprogramm folgt der gleichen Unterrichtsmethode wie unser Präsenzunterricht, 
			sodass Sie genau im gleichen Tempo lernen können, ohne den Komfort Ihres eigenen 
			Zuhauses zu verlassen.
			</p>
			<Row>
				<Col lg={6} />
				<Col lg={12}>
					<Table dataSource={data} bordered>
						<Column title="Course information" dataIndex="info" key="info" />
						<ColumnGroup title="Course type">
							<Column title="Basic" dataIndex="basic" key="basic" />
							<Column title="Premium" dataIndex="pro" key="pro" />
						</ColumnGroup>
					</Table>
				</Col>
				<Col lg={6} />
			</Row>
    	</div>
  	</div>
);

export default General;