var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.get('/admision', routes.views.admision);
	app.get('/carreras', routes.views.carreras);
	app.get('/eventos/:category?', routes.views.eventos);
	app.get('/eventos/post/:post', routes.views.post);
	app.get('/galeria', routes.views.galeria);
	app.get('/unidadpedagogica', routes.views.unidadpedagogica);
	app.get('/identidad', routes.views.identidad);
	app.all('/contacto', routes.views.contacto);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
//Cuando otro proyecto no me deja programar otra cosa y tengo que comentar para no perder mi cuadrito verde (?)
