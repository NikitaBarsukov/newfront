import React from 'react'
import './component.css';
import { Link } from "react-router-dom";

const Home = () => (
  <div className="jumbotron">
    <h1>Open Analyzer</h1>
    <p>Analyzer from OpenPolyEdu team.</p>
    <Link to="tech_specifications" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default Home;