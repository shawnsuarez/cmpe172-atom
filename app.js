const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require("mysql");
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

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


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});