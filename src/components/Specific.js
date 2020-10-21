import React from 'react'
import './styles/info.css'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'

const Specific = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
      		<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Home</NavLink>
      		</Breadcrumb.Item>
			<Breadcrumb.Item>
        		Adult courses
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>English for Specific Purposes</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
      		<h1 className="center-text">Englisch für spezielle Anlässe</h1>
			<p>
			Unsere Schüler lernen aus vielen Gründen Englisch und eine der beliebtesten 
			Anlässe ist die Verbesserung von Englisch für die Arbeit. Unsere Englischkurse 
			für bestimmte Zwecke sind gestaltet, um bestimmten Studenten zu helfen. Diese 
			Lektionen sind perfekt für diejenigen, die die Entwicklung der englischen 
			Sprache in ihren jeweiligen Arbeitsbereichen benötigen. So können Sie sich 
			wirklich auf den Wortschatz und die Fähigkeiten konzentrieren, die Sie in 
			Ihrem täglichen Arbeitsleben benötigen.
			<br/>
			<br/>
			Dies kann von professionellen Englischkursen für Ärzte bis zu professionellem 
			Englisch für  das Finanz- und Bankwesen variieren.
			<br/>
			<br/>
			Wählen Sie den richtigen Kurs, um Ihre Karriere voranzutreiben.
			<br/>
			<br/>
			Sie können aus den folgenden Klassen auswählen - alle werden bei Global Horizons unterrichtet:
			<br/>
			<br/>
			Englisch für die Medizin: Englischkurse für Mediziner und Angehörige der Gesundheitsberufe. 
			Dies ist ideal für Ärzte aus Übersee, welche in Großbritannien Medizin studieren.
			<br/>
			<br/>
			Englisch für Biologie: Egal, ob Sie sich für Meeresbiologie, Molekularbiologie, 
			Botanik oder einen anderen Bereich interessieren, unsere Experten können Ihnen 
			helfen, Ihr Studium in Englisch zu absolvieren.
			<br/>
			<br/>
			Englisch für Chemie: Wissenschaftliches Englisch für Chemiestudenten oder 
			Fachleute kann Ihnen helfen, sowohl im Labor als auch an der Universität 
			besser zu kommunizieren.
			<br/>
			<br/>
			Banking English: Der englische Wortschatz und die Fähigkeiten für 
			Bankfachleute müssen sehr fortgeschritten sein. Lassen Sie uns 
			Ihnen helfen, es richtig zu machen.
			<br/>
			<br/>
			Englisch für Finanzen: Entwickeln Sie Ihr Englisch für den Finanzsektor! 
			Egal, ob Sie Investitionen tätigen oder mit Geldwechseln arbeiten, lernen 
			Sie den Umgang mit Englisch mit einem stärkeren Fokus auf Mathematik, 
			Finanzen und Geld.
			<br/>
			<br/>
			Englisch für die Buchhaltung: Dieser Kurs kann Ihnen beim Absolvieren 
			von IFA, ACCA oder einem anderen Abschluss helfen sowie bereits 
			qualifizierten Buchhaltern wichtige Kenntnisse beibringen.
			<br/>
			<br/>
			Englisch für die Öl- und Gasindustrie: Die Arbeit in der Öl- 
			und Gasindustrie erfordert viel technisches Englisch, 
			welches dieser Kurs bietet.
			<br/>
			<br/>
			Englisch für Ingenieure: Nehmen Sie an unserem speziellen technischen 
			Englischkurs für Ingenieure teil. Bleiben Sie mit Ihren Kollegen auf 
			dem Laufenden, wenn sie die technischen Spezifikationen Ihrer 
			Projekte und Entwürfe besprechen.
			<br/>
			<br/>
			Executive Management English: Ein echter Executive English Kurs 
			in London! Manager benötigen mehr als nur Grundkenntnisse in 
			Englisch. Sie müssen wissen, wie man auf einer höheren Ebene 
			überzeugt, leitet, verhandelt und vieles mehr.
			<br/>
			<br/>
			Englisch für Marketing: Ein Business-Englischkurs für 
			Marketingaktivitäten. Neben der Marketing-Fachsprache 
			behandeln wir wichtige Fähigkeiten, die Sie jeden Tag 
			einsetzen können.
			<br/>
			<br/>
			Englisch für Juristen: Unser juristischer Englischkurs 
			richtet sich an Juristen. Unabhängig davon, ob Sie Büroberichte 
			schreiben oder vor Gericht sprechen, benötigen Sie ein hohes 
			Maß an schriftlichem und mündlichem Englisch.
			</p>
    	</div>
  	</div>
);

export default Specific;