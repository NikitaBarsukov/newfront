import React from 'react'
import 'antd/dist/antd.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Layout } from 'antd';

import Mymenu from './components/My_menu';
import Graph from './components/Graph'





class App extends React.Component {
	render() {
		return (
		<Layout style={{ minHeight: '100vh' }}>
			<Router>
				<Switch>
					<Route exact path='/graph' component={Graph} />
					<Route exact path='/*' component={Mymenu} />
				</Switch>
			</Router>
      	</Layout>
		);
	}
}

export default App