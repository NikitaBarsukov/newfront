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
		basic: 'A1 - C1',
	  },
	  {
		info: 'Gesamtpreis des Kurses',
		basic: '25€',
	  },
  ];

const General = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Startseite</NavLink>
      		</Breadcrumb.Item>
			<Breadcrumb.Item>
				Kurse für Erwachsene
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>Allgemeines Englisch</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
			<h1 className="center-text">Allgemeines Englisch</h1>
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
						<Column title="Kursinformationen" dataIndex="info" key="info" />
						<Column title="Allgemeines Englisch" dataIndex="basic" key="basic" />
					</Table>
				</Col>
				<Col lg={6} />
			</Row>
    	</div>
  	</div>
);

export default General;