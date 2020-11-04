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
		basic: '60 minutes',
	  },
	  {
		info: 'Eduacational levels',
		basic: 'Intermediate - Advanced',
	  },
	  {
		info: 'Price for the whole course',
		basic: '35€',
	  },
  ];


const Academic = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Startseite</NavLink>
      		</Breadcrumb.Item>
			<Breadcrumb.Item>
				Kurse für Erwachsene
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>Akademisches English</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
			<h1 className="center-text">Akademisches English</h1>
			<p>
			Möchten Sie Zugang zur Bildung Ihrer Träume erhalten? Unser 
			akademischer Englischkurs bereitet Sie auf den Erfolg in 
			einem englischsprachigen Universitätsumfeld vor.
			<br/>
			<br/>
			Möchten Sie im Ausland studieren oder arbeiten? 
			Dann ist dieser Kurs genau das Richtige für Sie. 
			Jeder Kurs konzentriert sich auf verschiedene 
			Elemente der Prüfung - Sprechen, Schreiben, Hören 
			und Lesen. Unsere IELTS- und TOEFL-Vorbereitungskurse 
			vermitteln Ihnen das notwenige Vertrauen sowie 
			die Fähigkeiten, um die bestmöglichen Ergebnisse 
			bei den Prüfungen zu erzielen.
			<br/>
			<br/>
			Die meisten Universitäten möchten eine IELTS-Punktzahl 
			von 6 oder sogar 7. Wir verfügen über hervorragende Erfolgsquoten 
			und aktuelle Tests, um Ihnen zu zeigen, auf welchem Stand Sie 
			sind und beraten Sie individuell, wenn Sie bereit sind, die 
			Prüfung zu absolvieren. Unsere Lehrer verfügen über 
			jahrelange Erfahrung. Nicht nur im Unterrichten von Englisch, 
			sondern auch im Unterrichten der IELTS-Prüfungsvorbereitung. 
			Wir kennen alle Tipps und Prüfungstechniken, 
			um Ihre Punktzahl auf das zu bringen, was Sie benötigen.
			<br/>
			<br/>
			Im virtuellen Klassenzimmer üben Sie die Fähigkeiten, 
			die Sie benötigen, um den Test zu bestehen, und erweitern 
			gleichzeitig Ihre Grammatik sowie Ihren Wortschatz 
			um nützliche akademische Sprachen und Strukturen. 
			Sie werden auch das Format kennenlernen und jeden Abschnitt 
			des Tests üben, so dass es keine Überraschungen gibt, 
			wenn Sie die Prüfung tätigen. Sie haben viel Prüfungspraxis 
			mit hilfreichen Rückmeldungen und Korrekturen, damit 
			Sie genau wissen, was Sie während des eigentlichen Tests tun müssen.
			</p>
			<Row>
			<Col lg={6} />
				<Col lg={12}>
					<Table dataSource={data} bordered>
						<Column title="Course information" dataIndex="info" key="info" />
						<Column title="Akademisches English" dataIndex="basic" key="basic" />
					</Table>
				</Col>
				<Col lg={6} />
			</Row>
    	</div>
  	</div>
);

export default Academic;