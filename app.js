const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express();

app.get("/" , (req, res) => {
	console.log("Front Page");
});

app.listen(PORT, () => {
  console.log(`NODE server listening on port ${ PORT }!`);
});