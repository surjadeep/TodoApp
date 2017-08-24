import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import Home from './containers/Home';
import TodoList from './containers/TodoList';
import TodoDetails from './containers/TodoDetails';
import ContactUs from './containers/ContactUs';
import NotFound from './containers/NotFound';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path='/todos' component={TodoList} />
		<Route path='/contact-us' component={ContactUs} />
		<Route path="/todos/:todoId" component={TodoDetails} />
		<Route path='*' component={NotFound} />
	</Route>
);






