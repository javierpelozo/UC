var keystone = require('keystone');
var Types = keystone.Field.Types;

var Galeria = new keystone.List('Galeria', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Galeria.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
});

Galeria.register();
