const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors');
const mysql = require("mysql");
const PORT = process.env.PORT || 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

// Static file declaration
app.use("/static", express.static(path.join(__dirname, 'client/build')));

const connection = mysql.createConnection({
	host: 'atompayroll.mysql.database.azure.com',
	user: 'atompayroll@atompayroll',
	password: 'Cmpe172!',
	database: 'employees',
	port: 3306
});

connection.connect(err => {
	(err) ? console.log(err) : console.log("Connected to MySQL");
});

// production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
};

// build mode
/*app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/public/index.html'));
});
*/
app.get("/", (req, res) => {

});

app.get("/employeestest/:page" , (req, res) => {
	let page = parseInt(req.params.page) * 20;
	connection.connect();
	// LIMIT # OFFSET = PAGE # * EMPLOYEES/PAGE
	connection.query(`SELECT * FROM EMPLOYEES LIMIT 20 OFFSET ${page}`,
		(error, results, fields) => {
			if (error) throw error;
			res.send(results);
	});
	connection.end();
});

app.get("/payrolltest/:page", (req, res) => {
	let page = parseInt(req.params.page) * 20;

	connection.query(
		`SELECT e.emp_no, first_name, last_name, salary, from_date, to_date 
		FROM EMPLOYEES e 
		INNER JOIN (SELECT * FROM SALARIES s GROUP BY s.emp_no) AS Sal 
		ON e.emp_no = Sal.emp_no 
		LIMIT 20 OFFSET ${page}`,
		(error, results, fields) => {
			if (error) throw error;
			res.send(results);
	});

});

function keepAlive(){
	connection.query( "SELECT 1", function(err, rows) {
		if (err) {
			console.log("QUERY ERROR: " + err);
		}
	});
}
setInterval(keepAlive, 30000);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});