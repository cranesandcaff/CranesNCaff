var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddictionSchema = new Schema({
	addictionName: {
		type: String,
		default: '',
		trim: true
	},
	img: String,
	description: String,
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

AddictionSchema.statics.load = function(id, cb) {
	this.findOne({
		_id: id
	}).populate('user', 'name username').exec(cb);
};

mongoose.model('Addiction', AddictionSchema);