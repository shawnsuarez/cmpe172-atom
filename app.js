const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/" , (req, res) => {
	res.send("Front Page");
});

app.listen(PORT, () => {
  console.log(`NODE server listening on port ${ PORT }!`);
});