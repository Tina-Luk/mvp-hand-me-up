const mysql = require('mysql');
const connection = mysql.createConnection({
	user: 'root',
	password: 'password',
	database: 'MVP',
});

connection.connect(function (err) {
	if (err) {
		console.log(err);
	}
	console.log('connected to DB');
});

module.exports = connection;
