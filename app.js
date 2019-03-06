const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express();

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
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

app.get("/" , (req, res) => {
	console.log("Front Page");
});

app.listen(PORT, () => {
  console.log(`NODE server listening on port ${ PORT }!`);
});