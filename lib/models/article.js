var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
		default: '',
		trim: true
	},
	subtitle: String,
	content: String,
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

ArticleSchema.statics = {
  load: function(id, cb) {
    this.findOne({
      _id: id
    }).populate('creator', 'username').exec(cb);
  }
};

mongoose.model('Article', ArticleSchema);