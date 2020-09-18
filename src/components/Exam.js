import React from 'react'
import './styles/info.css'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'

const Exam = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Home</NavLink>
      		</Breadcrumb.Item>
			<Breadcrumb.Item>
        		<NavLink to="/Adult" className="nav-text">Adult courses</NavLink>
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>Exam preparation</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
      		<h1 className="center-text">Trinity, Cambridge and Language Certificate Exams</h1>
			<p>
				Do you want to achieve your target goal? We'll help you to prepare
				 for the Trinity exams so that you can do it. The classes are designed 
				 in that way which provides you with the essential preparation and practice 
				 tailored to your needs, with exam strategies and techniques to help you pass 
				 each part of the test.
			</p>
    	</div>
  	</div>
);

export default Exam;