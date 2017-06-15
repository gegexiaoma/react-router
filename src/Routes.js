import React from 'react';
//import {Provider} from 'react-redux';

import App from './pages/App.js';
//import Page from './pages/Page.js';

//import { Redirect} from 'react-router';
import { BrowserRouter as Router,
  Route, Switch} from 'react-router-dom'

import Home from './pages/Home.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js';
//import store from './Store.js';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();


const Routes = () => (
	<Router history={history}>
	

	<div>
		<Route path="/" component={App}>
		</Route>
		<hr />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/about" component={About} />
			<Route path="*" component={NotFound} />
		</Switch>
	</div>

	</Router>
);
export default Routes;
