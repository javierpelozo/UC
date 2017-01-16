var keystone = require('keystone');

/**
 * Admision Model
 * ==================
 */

var Admision = new keystone.List('Admision', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Admision.add({
	name: { type: String, required: true },
});

Admision.register();
