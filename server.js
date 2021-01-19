require('dotenv').config();
const express = require('express'),
  app = express(),
  path = require('path'),
  { connectDB } = require('./config/connectDB'),
  PORT = 3001 || process.env.PORT;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static("client/build"));

/*
@GET route
desc test routes
access public
*/
app.get("/test", (req, res) => {
  res.json({ msg: "Test Route" });
});

/*
@GET route
desc react routes
access public
*/
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use("/api/user", require('./routes/user-routes'))

app.listen(PORT, () => {
  console.log("http://localhost:3001")
})