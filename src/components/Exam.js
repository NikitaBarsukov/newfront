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
			Möchten Sie Ihr Ziel erreichen? Wir helfen Ihnen, sich auf die Trinity-Prüfungen vorzubereiten, damit Sie dies tun können. Die Kurse sind so gestaltet, dass Sie die notwendigen Vorbereitungen und Übungen erhalten, die auf Ihre Bedürfnisse angepasst sind, sowie Prüfungsstrategien und -techniken, die Ihnen helfen, jeden Teil des Tests erfolgreich zu absolvieren.
Unsere Online-Englischkurse für Prüfungen helfen Ihnen dabei, die bestmögliche Punktzahl in der Prüfung Ihrer Wahl zu erzielen. Die Kurse werden von erfahrenen Prüfungslehrern unterrichtet, die nachweislich erfolgreich Schüler beim Bestehen von Prüfungen unterstützen. Diese Kurse sind auf Studenten spezialisiert, die die PET (vorläufige Englischprüfung), die FCE (erstes Zertifikat für Englisch), die CAE (Cambridge English Advanced Exam) und die CPE (Cambridge English Proficiency) bestehen möchten.
			</p>
    	</div>
  	</div>
);

export default Exam;