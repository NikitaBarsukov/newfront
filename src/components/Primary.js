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
				???
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

export default Primary;