var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

var routes = {
	views: importRoutes('./views'),
};

exports = module.exports = function (app) {
	app.get('/', routes.views.index);
	app.get('/admision', routes.views.admision);
	app.get('/carreras', routes.views.carreras);
	app.get('/eventos/:category?', routes.views.eventos);
	app.get('/eventos/post/:post', routes.views.post);
	app.get('/galeria', routes.views.galeria);
	app.get('/unidadpedagogica', routes.views.unidadpedagogica);
	app.get('/identidad', routes.views.identidad);
	app.all('/contacto', routes.views.contacto);
};
