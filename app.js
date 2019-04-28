const express = require('express');
const router = express.Router({ mergeParams: true });
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors');
const PORT = process.env.PORT || 8080;

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  /*res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");*/
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const employeeRoutes = require("./routes/employeeRoutes");
const payrollRoutes = require("./routes/payrollRoutes");
const departmentRoutes = require("./routes/departmentRoutes");

app.use("/employeestest", employeeRoutes);
app.use("/dashboard", payrollRoutes);
//app.use("/payrolltest", payrollRoutes);
app.use("/departments", departmentRoutes);

// Static file declaration
app.use("/static", express.static(path.join(__dirname, 'client/build')));

// production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
};

// build mode
/*app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/public/index.html'));
});*/

/*app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
})*/

const root = require('path').join(__dirname, 'client', 'public')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
