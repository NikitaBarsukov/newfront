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
		basic: '25 Minuten',
	  },
	  {
		info: 'Kompetenzniveaus',
		basic: 'A1 - B1',
	  },
	  {
		info: 'Gesamtpreis des Kurses',
		basic: '15€',
	  },
  ];

const Kids = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Startseite</NavLink>
      		</Breadcrumb.Item>
			<Breadcrumb.Item>
        		Kurse für Kinder
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>Junior von 4 bis 9</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
			<h1 className="center-text">Junior von 4 bis 9</h1>
			<p>
			Es ist erwiesen, dass die ersten sechs Lebensjahre eines Kindes 
			für die Entwicklung des Gehirns am wichtigsten sind. Während 
			dieser Zeit werden alle wichtigen Verbindungen zwischen den 
			einzelnen Gehirnzellen im Gehirn hergestellt. Die Vielfalt 
			des Gehirns hängt von der Menge an Informationen ab, 
			die das Kind erhält. Studien haben gezeigt, 
			dass sich das Erlernen einer zweiten Sprache in jungen 
			Jahren positiv auf die Intelligenz auswirkt.
			<br />
			<br />
			Aber auch nach dem sechsten Lebensjahr kann eine zweite 
			Sprache mühelos und fast Akzent erlernt werden. Die 
			Fähigkeit, mühelos zu lernen, geht jedoch zu Beginn 
			der Pubertät - etwa im Alter von 11 Jahren - unwiederbringlich 
			verloren. Wenn das Kind bereits im Vor- und 
			Grundschulalter eine zweite Sprache gelernt hat, hilft 
			es ihm sehr im späteren Leben. Auch im Schulleben 
			hat es einen großen Vorteil: Das Kind hat bereits umfassendes 
			Wissen erworben und kann sich auf einfache 
			und entspannte Weise auf komplexes Lernen vorbereiten.
			</p>
			<Row>
				<Col lg={6} />
				<Col lg={12}>
					<Table dataSource={data} bordered>
						<Column title="Kursinformationen" dataIndex="info" key="info" />
						<Column title="Junior von 4 bis 9" dataIndex="basic" key="basic" />
					</Table>
				</Col>
				<Col lg={6} />
			</Row>
    	</div>
  	</div>
);

export default Kids;