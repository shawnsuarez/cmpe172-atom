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
		`SELECT e.emp_no, first_name, last_name, title, salary, s.from_date, s.to_date, hire_date, de.dept_no 
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

// Create employee
router.post("/:dept/addemployee", (req, res) => {
	let empNo = req.body.emp_no;

	connection.query(
		`INSERT INTO EMPLOYEES(emp_no, first_name, last_name, hire_date) VALUES ( ?, ?, ?, ?);
		INSERT INTO DEPT_EMP(emp_no, dept_no) VALUES ( ?, ?);
		INSERT INTO SALARIES(emp_no, salary, from_date, to_date) VALUES ( ?, ?, ?, ?);
		INSERT INTO TITLES(emp_no, title) VALUES ( ?, ?);`, 
		[ empNo, req.body.first_name, req.body.last_name, req.body.hire_date,
			empNo, req.body.dept_no,
			empNo, req.body.salary, req.body.from_date, req.body.to_date,
			empNo, req.body.empTitle],
		(error, results, fields) => {
			if(error) throw error;
			res.json(results);
		}
	);
});

// Update employee
router.post("/:dept/edit", (req, res) => {
	let empNo = req.body.emp_no;

	connection.query(
	`UPDATE SALARIES
	SET salary = ?, from_date = ?, to_date = ?
	WHERE emp_no = ?;
	UPDATE dept_emp
	SET dept_no = ?
	WHERE emp_no = ?;
	UPDATE TITLES
	SET title = ?
	WHERE emp_no = ?;`,
	[ req.body.salary, req.body.from_date, req.body.to_date, 
		empNo, 
		req.body.dept_no,
		empNo,
		req.body.title,
		empNo],
	(error, results, fields) => {
		if (error) throw error;
		res.json(results);
	});
});

// Delete employee
router.post("/:dept/delete", (req, res) => {
	let empNo = req.body.emp_no;
	connection.query(
	`DELETE FROM EMPLOYEES WHERE emp_no = ?;`,
	[empNo],
	(error, results, fields) => {
		if (error) throw error;
		res.json(results);
	});
});

module.exports = router;