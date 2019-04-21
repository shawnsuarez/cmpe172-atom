const mysql = require("mysql");

const connection = mysql.createConnection({
	host: 'atompayroll.mysql.database.azure.com',
	user: 'atompayroll@atompayroll',
	password: 'Cmpe172!',
	database: 'employees',
	port: 3306,
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