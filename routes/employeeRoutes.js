const express = require('express');
const router = express.Router({ mergeParams: true });
const connection = require("../connection.js");

// Show employees with pagination
router.get("/:page" , async (req, res) => {
	let empPerPage = 25;
	let page = (parseInt(req.params.page) - 1) * empPerPage;
	if (page < 0)
		page = 0;

	// LIMIT # OFFSET = PAGE # * EMPLOYEES/PAGE
	// Returns emp_no, first_name, last_naem, gender, hire_date
	await connection.query(
		`SELECT * 
		FROM EMPLOYEES e
		INNER JOIN (SELECT * FROM TITLES t GROUP BY t.emp_no) As Titles
		ON e.emp_no = Titles.emp_no
		LIMIT ${empPerPage} OFFSET ${page}`,
		(error, results, fields) => {
			if (error) throw error;
			//res.send(results);
			res.json(results);
	});
});

// Add employee
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
			res.send(JSON.stringify(results));
		}
	);
});

// Update employee
router.get("/:emp_id/edit", (req, res) => {
	connection.query(
	`UPDATE SALARIES salary = ${req.body.newSalary} WHERE emp_no = ${req.params.emp_id}
	`,
	(error, results, fields) => {
		if (error) throw error;
		res.send(JSON.stringify(results));
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
