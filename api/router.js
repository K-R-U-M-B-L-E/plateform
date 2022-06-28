const express = require("express");
const app = express()
app.use(express.json())

const Associationcontroller = require('./1.controller/associationcontroller');

const PORT = 3001;
app.listen(
    PORT, 
    () => console.log("Time to Krummmble")
)


/////////////////////////////////////////////// ASSOCIATIONS //////////////////////////////////////////////////////

app.get('/associations', (req, res) => { Associationcontroller.getAll(req, res) })
app.get('/associations/:id', (req, res) => { Associationcontroller.getSingle(req, res) })
app.post("/associations", (req, res) => { Associationcontroller.addSingle(req,res) })
app.patch("/associations/:id", (req, res) => { Associationcontroller.updateSingle(req,res)} )
app.delete("/associations/:id", (req, res) => { Associationcontroller.deleteSingle(req,res)})

app.all('*', function(req, res) {
    res.status(400).json({err : "Bad Request"});
})
