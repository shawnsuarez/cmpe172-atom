const express = require('express');
const router = express.Router({ mergeParams: true });
const connection = require("../connection.js");


router.get("/:dept/:page", (req, res) => {
	let dept = req.params.dept;
	let empPerPage = 50;
	let page = (parseInt(req.params.page) - 1) * empPerPage;
	if (page < 0)
		page = 0;

	connection.query(
		`SELECT e.emp_no, first_name, last_name, title, salary, s.from_date, s.to_date, hire_date 
		FROM dept_emp de
				INNER JOIN 
				(SELECT dept_no 
		        FROM DEPARTMENTS 
		        WHERE dept_name = "${dept}") AS d
				ON d.dept_no = de.dept_no
		INNER JOIN Employees e 
		ON e.emp_no = de.emp_no
		INNER JOIN TITLES t
		ON de.emp_no = t.emp_no
		INNER JOIN SALARIES s
		ON e.emp_no = s.emp_no
		GROUP BY e.emp_no
		LIMIT ${empPerPage} OFFSET ${page};`,
		(error, results, fields) => {
			if (error) throw error;
			res.json(results);
	});
});

module.exports = router;