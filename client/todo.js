
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux'; 
import store, { history } from './store';


const router = (
	<Provider store={store}>
    		<Router routes={routes} history={history} />
	</Provider>
);
/* Render */
render(router, document.getElementById('root'));
