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

const Kids = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Home</NavLink>
      		</Breadcrumb.Item>
			<Breadcrumb.Item>
        		Junior courses
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

export default Kids;