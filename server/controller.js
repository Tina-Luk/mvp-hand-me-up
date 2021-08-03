const models = require('./models.js');

const errFirstCb = (err, data, res) => {
	if (err) {
		res.sendStatus(404);
	} else {
		res.status(200).send(data);
	}
};

const controller = {
	posts: {
		get: function (req, res) {
			models.posts.get((err, data) => {
				errFirstCb(err, data, res);
			});
		},
		post: function (req, res) {
			models.posts.post(req.body.options, (err, data) => {
				errFirstCb(err, data, res);
			});
		},
		delete: function (req, res) {
			models.posts.delete(req.params.id, (err, data) => {
				errFirstCb(err, data, res);
			});
		},
		update: function (req, res) {
			models.posts.update(req.params.id, req.body, (err, data) => {
				console.log(data);
				errFirstCb(err, data, res);
			});
		},
	},
	user: {
		get: function (req, res) {
			models.user.get(req.params.id, (err, data) => {
				errFirstCb(err, data, res);
			});
		},
		post: function (req, res) {
			models.user.post(req.body.options, (err, data) => {
				errFirstCb(err, data, res);
			});
		},
		login: function (req, res) {
			models.user.login(JSON.parse(req.query.options), (err, data) => {
				errFirstCb(err, data, res);
			});
		},
	},
};

module.exports = controller;
