const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "us-cdbr-iron-east-02.cleardb.net",
	user: "b38a4dbb421b96",
	password: "be54f0d0",
	database: "heroku_bd28f8170ef19ac",
	multipleStatements: true
});

connection.connect(err => {
	(err) ? console.log(err) : console.log("Connected to DB");
});

function keepAlive(){
	connection.query( "SELECT 1", function(err, rows) {
		if (err) {
			console.log("QUERY ERROR: " + err);
		}
	});
}
setInterval(keepAlive, 30000);

module.exports = connection;