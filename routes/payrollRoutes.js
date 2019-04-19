const express = require('express');
const router = express.Router({ mergeParams: true });
const connection = require("../connection.js");

router.get("/:page", async (req, res) => {
	let empPerPage = 25;
	let page = parseInt(req.params.page) * empPerPage;

	await connection.query(
		`SELECT e.emp_no, first_name, last_name, title, salary, Sal.from_date, Sal.to_date 
		FROM EMPLOYEES e 
		INNER JOIN (SELECT * FROM SALARIES s GROUP BY s.emp_no) AS Sal 
		ON e.emp_no = Sal.emp_no 
		INNER JOIN (SELECT * FROM TITLES t GROUP BY t.emp_no) As Titles
		LIMIT ${empPerPage} OFFSET ${page}`,
		(error, results, fields) => {
			if (error) throw error;
			res.json(results);
	});
});

module.exports = router;