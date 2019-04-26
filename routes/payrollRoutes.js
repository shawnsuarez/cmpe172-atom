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
		`SELECT e.emp_no, e.first_name, e.last_name, title, hire_date, salary, Sal.from_date, Sal.to_date 
		FROM EMPLOYEES e 
		INNER JOIN (SELECT * FROM SALARIES s GROUP BY s.emp_no) AS Sal 
		ON e.emp_no = Sal.emp_no 
		INNER JOIN (SELECT * FROM TITLES t GROUP BY t.emp_no) As Titles
		ON e.emp_no = Titles.emp_no
		LIMIT ${empPerPage} OFFSET ${page}`,
		(error, results, fields) => {
			if (error) throw error;
			res.json(results);
	});
});

// Create employee
router.post("/addemployee", (req, res) => {
	let empNo = req.body.emp_no;

	connection.query(
		`INSERT INTO EMPLOYEES(emp_no, first_name, last_name, hire_date) 
		VALUES (${empNo}, ${req.body.first_name}, ${req.body.last_name}. ${req.body.hire_date});
		INSERT INTO DEPT_EMP(emp_no, dept_no)
		VALUES (${empNo}, ${req.body.dept_no});
		INSERT INTO SALARIES(emp_no, salary, from_date, to_date)
		VALUES (${empNo}, ${req.body.salary}, ${req.body.from_date}, ${req.body.to_date});
		INSERT INTO TITLES(emp_no, title)
		VALUES (${empNo}, ${req.body.empTitle});`,
		(error, results, fields) => {
			if(error) throw error;
			res.json(results);
		}
	);
});

// Update employee
router.get("/edit", (req, res) => {
	connection.query(
	`UPDATE SALARIES 
	SET salary = ${req.body.salary}, from_date = ${req.body.from_date}, to_date = ${req.body.to_date} 
	WHERE emp_no = ${req.body.emp_no}`,
	(error, results, fields) => {
		if (error) throw error;
		res.json(results);
	});
});

// Delete employee
router.post("/delete", (req, res) => {
	let empNo = req.body.emp_no;
	connection.query(
	`DELETE FROM EMPLOYEES WHERE emp_no = ${empNo}`,
	(error, results, fields) => {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
});

module.exports = router;
