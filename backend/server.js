const express = require('express')
const app = express()

const PORT = 8080;
// const morgan = require('morgan')
const cors = require('cors');
app.use(cors());

// app.use(morgan('short')) //Morgan helps log what kind of request was triggered

app.get("/", (req, res) => { //call back func
  console.log("Responding to root route")
  res.send("Hello from Root!")
})

app.get("/json-data", (req, res) => {
  var user = [
    {firstName: "Adam", lastName: "Small"},
    {firstNAme: "Bela", lastName: "Big"}
  ]
  res.json(user)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`)
})
