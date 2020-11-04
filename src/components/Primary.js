import React from 'react'
import './styles/info.css'
import { Breadcrumb,Table, Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'

const { Column, ColumnGroup } = Table;

const data = [
	{
	  info: 'Duration of a course',
	  basic: '5 months',
	},
	{
		info: 'Duration of the lesson',
		basic: '45 minutes',
	  },
	  {
		info: 'Eduacational levels',
		basic: 'Elementary - Upper Intermediate',
	  },
	  {
		info: 'Price for the whole course',
		basic: '20€',
	  },
  ];

const Primary = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Home</NavLink>
      		</Breadcrumb.Item>
			<Breadcrumb.Item>
        		Junior courses
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>Für Jugendliche von 10 bis 16 Jahren</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
			<h1 className="center-text">Für Jugendliche von 10 bis 16 Jahren</h1>
			<p>
			Die Anforderungen an Kinder steigen nach der Grundschule erheblich. 
			Große Klassen und ein straff organisierter Lehrplan lassen dem 
			Einzelnen in der Sekundarschule nicht viel Raum. Es ist 
			hauptsächlich theoretisches Wissen, welches in der Schule 
			vermittelt wird. Wir ein praktisches Konzept entwickelt, 
			das unsere Kinder in die Lage versetzt, die englische Sprache aktiv, 
			frei, kreativ und ohne Hemmungen zu verwenden - ähnlich wie unsere 
			Muttersprache. Neben der Festigung der Grammatik steht das freie 
			Sprechen in Englisch im Mittelpunkt unserer Kurse. Durch viele 
			Konversationsspiele werden die Schüler bald in der Lage sein, 
			instinktiv auf Englisch zu kommunizieren. Die Grammatik wird 
			ausführlich erklärt und mit vielen Spielen und Übungen 
			gefestigt. Wir helfen, Lücken im Grundwissen zu schließen, 
			während die Hemmungen, eine neue Sprache zu sprechen, allmählich 
			verringert werden. Kommunikation, Zuhören und Verstehen werden mit 
			viel Spaß und ohne Leistungsdruck erlernt.
			</p>
			<Row>
				<Col lg={6} />
				<Col lg={12}>
					<Table dataSource={data} bordered>
						<Column title="Course information" dataIndex="info" key="info" />
						<Column title="Für Jugendliche von 10 bis 16 Jahren" dataIndex="basic" key="basic" />
					</Table>
				</Col>
				<Col lg={6} />
			</Row>
    	</div>
  	</div>
);

export default Primary;