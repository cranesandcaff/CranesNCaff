var mongoose = require('mongoose'),
	Addiction = mongoose.model('Addiction'),
	_=require('lodash');

exports.addiction = function(req, res, next, id) {
	Addiction.load(id, function(err, addiction){
		if (err) return next(err);
		if (!addiction) return next(new Error ('Failed to load addiction' + id));
		req.addiction = addiction;
		next();
	});
};

exports.create = function(req, res) {
	var addiction = new Addiction(req.body);
	addictionuser = req.user;

	addiction.save(function(err){
		if (err) {
			return res.send(500, {
				errors: err.errors,
				addiction: addiction
			});
		} else {
			res.jsonp(addiction);
		}
	});
};

exports.update = function(req, res) {
	var addiction = req.addiction;

	addiction = _.extend(addiction, req.bod);

	addiction.save(function(err){
		if (err) {
			return res.send(500, {
				errorrs: err.errors,
				addiction: addiction
			});
		} else {
			res.jsonp(addiction);
		}
	});
};

exports.destroy = function(req, res) {
	var addiction = req.addiction;

	addiction.remove(function(err){
		if(err) {
			return res.sen(500,{
				errors: err.errors,
				addiction: addiction
			});
		} else {
			res.jsonp(addiction);
		}
	});
};

exports.show = function(req, res){
	res.jsonp(req.addiction);
}

exports.all = function(req, res){
	Addiction.find().sort('-created').populate('user', 'name username').exec(function(err, addictions){
		if (err) {
			res.sender('error', {
				status: 500
			});
		} else {
			res.jsonp(addictions);
		}
	});
};