const express = require('express');
const router = express.Router({ mergeParams: true });
const connection = require("../connection.js");

// Show employee payroll
router.get("/:page", (req, res) => {
	let empPerPage = 50;
	let page = (parseInt(req.params.page) - 1) * empPerPage;
	if (page < 0)
		page = 0;

	connection.query(
		`SELECT e.emp_no, e.first_name, e.last_name, title, hire_date, salary, Sal.from_date, Sal.to_date, dept_no 
		FROM EMPLOYEES e 
		INNER JOIN (SELECT * FROM SALARIES s GROUP BY s.emp_no) AS Sal 
		ON e.emp_no = Sal.emp_no 
		INNER JOIN (SELECT * FROM TITLES t GROUP BY t.emp_no) As Titles
		ON e.emp_no = Titles.emp_no
		INNER JOIN (SELECT * FROM DEPT_EMP d GROUP BY d.emp_no) As DeptEmp
		ON e.emp_no = DeptEmp.emp_no
		LIMIT ${empPerPage} OFFSET ${page};`,
		(error, results, fields) => {
			if (error) throw error;
			res.json(results);
	});
});

// Create employee
router.post("/addemployee", (req, res) => {
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
router.post("/edit", (req, res) => {
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
router.post("/delete", (req, res) => {
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
