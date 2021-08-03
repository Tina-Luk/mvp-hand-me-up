const db = require('./db/index');

const models = {
	posts: {
		get: function (cb) {
			db.query(`SELECT * FROM Post`, (err, data) => {
				if (err) {
					cb(err);
				} else {
					cb(null, data);
				}
			});
		},
		post: function (options, cb) {
			db.query(
				`INSERT INTO Post (category, title, description, itemCondition, picture, userId) VALUES ('${options.category}', '${options.title}', '${options.description}', '${options.condition}', '${options.picture}', ${options.userId});`,
				(err, data) => {
					if (err) {
						cb(err);
					} else {
						cb(null, data);
					}
				}
			);
		},
		delete: function (id, cb) {
			db.query(`DELETE FROM Post WHERE id=${id};`, (err, data) => {
				if (err) {
					cb(err);
				} else {
					cb(null, data);
				}
			});
		},
		update: function (id, data, cb) {
			console.log(data.options.category);
			db.query(
				`UPDATE Post  SET category='${data.options.category}', title='${data.options.title}', description='${data.options.description}', itemCondition='${data.options.condition}', picture='${data.options.picture}' WHERE id=${id};`,
				(err, data) => {
					console.log(err, data);
					if (err) {
						cb(err);
					} else {
						cb(null, data);
					}
				}
			);
		},
	},
	user: {
		get: function (id, cb) {
			db.query(`SELECT * FROM User where id=${id}`, (err, data) => {
				if (err) {
					cb(err);
				} else {
					cb(null, data);
				}
			});
		},
		post: function (options, cb) {
			db.query(
				`INSERT INTO User (name, email, password, phoneNumber, cityState, zip) VALUES ('${options.firstName} ${options.lastName}', '${options.email}', '${options.password}', '${options.phoneNumber}', '${options.cityState}', '${options.zip}');`,
				(err, data) => {
					if (err) {
						cb(err);
					} else {
						cb(null, data);
					}
				}
			);
		},
		login: function (data, cb) {
			db.query(`SELECT * FROM User where email='${data.email}' AND password='${data.password}';`, (err, data) => {
				if (err) {
					cb(err);
				} else {
					cb(null, data);
				}
			});
		},
	},
};

module.exports = models;
