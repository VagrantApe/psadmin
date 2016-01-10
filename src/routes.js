'use strict';

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var FourOFour = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name='app' path='/' handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homePage')} />
		<Route name='authors' handler={require('./components/authors/authorPage')} />
		<Route name='addAuthor' path='author' handler={require('./components/authors/manageAuthorPage')} />
		<Route name='manageAuthor' path='author/:id' handler={require('./components/authors/manageAuthorPage')} />
		<Route name='about' handler={require('./components/about/aboutPage')} />
		<FourOFour handler={require('./components/404')} />
		<Redirect from='about/*' to='about' />
	</Route>
);

module.exports = routes;