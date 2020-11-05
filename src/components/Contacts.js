import React from 'react'
import './styles/info.css'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'

const Contacts = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Startseite</NavLink>
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>Kontakt</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
      		<h1 className="center-text">Kontakt</h1>
			  <p className="center-text">
			  		Erreichbar sind wir unter folgender E-Mail Adresse: 
				<br />
				<a 
				href = "mailto: info.globalhorizons@gmail.com"
				className = "kontakt"
				>
					 info.globalhorizons@gmail.com
				</a>
			  </p>
				

    	</div>
  	</div>
);

export default Contacts;