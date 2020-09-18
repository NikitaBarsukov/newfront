import React from 'react'
import './styles/info.css'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'

const General = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Home</NavLink>
      		</Breadcrumb.Item>
			<Breadcrumb.Item>
        		<NavLink to="/Adult" className="nav-text">Adult courses</NavLink>
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>General English</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
			<h1 className="center-text">General English</h1>
				<p>
				Our most popular course suits every level of learner. 
				The courses are designed for students who want to improve their
				 “Core English Skills” – listening, speaking, reading and writing. 
				 If you are interested in gaining a good understanding of English for reading, 
				 conversation or travel, then one of our General English courses will be a right 
				 choice for you.
			  	</p>
    	</div>
  	</div>
);

export default General;