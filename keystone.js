// Simular opciones de configuración del entorno de producción por
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Inicia Keystone con la configuración del proyecto.

keystone.init({
	'name': 'ucsi',
	'brand': 'ucsi',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Cargar Models del proyecto
keystone.import('models');

// Configura los locales comunes para sus plantillas. Los siguientes son necesarios para la
// Plantillas y diseños de paquetes. Cualquier locales de tiempo de ejecución (que se deben establecer de forma única
// Para cada solicitud), debe añadirse a ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Carga Routes
keystone.set('routes', require('./routes'));

// Configura los locals comunes para los correos electrónicos. Los siguientes son requeridos por Keystone
// Plantillas de correo electrónico predeterminado
keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7',
		},
	},
});

// Cargar rutas de prueba de correo electrónico de su proyecto
keystone.set('email tests', require('./routes/emails'));


// Cambiar Keystone correo electrónico predeterminado en el hbs
keystone.Email.defaults.templateExt = 'hbs';
keystone.Email.defaults.templateEngine = require('handlebars');


// Configurar la barra de navegación en la interfaz de usuario de administración de Keystone
keystone.set('nav', {
	posts: ['posts', 'post-categories'],
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
});

// Iniciar Keystone para conectarse a la base de datos e inicializar el servidor web
keystone.start();
