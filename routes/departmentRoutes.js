const express = require('express');
const router = express.Router({ mergeParams: true });
const connection = require("../connection.js");


router.get("/:dept", async (req, res) => {
	let dept = req.params.dept;
	let empPerPage = 25;
	let page = parseInt(req.params.page) * empPerPage;

	await connection.query(
		`SELECT e.emp_no, e.first_name, e.last_name, titles.title, e.hire_date 
		FROM EMPLOYEES e
		INNER JOIN
		(SELECT * FROM TITLES) AS titles
		ON e.emp_no = titles.emp_no
		INNER JOIN
		(SELECT d.dept_name, d.dept_no, de.emp_no FROM dept_emp de
		INNER JOIN DEPARTMENTS d ON de.dept_no = d.dept_no) As depts
		ON e.emp_no = depts.emp_no
		WHERE dept_name = "${dept}"
		GROUP BY e.emp_no`,
		(error, results, fields) => {
			if (error) throw error;
			res.json(results);
	});
});

module.exports = router;