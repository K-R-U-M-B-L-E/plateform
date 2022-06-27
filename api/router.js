const express = require("express");
const PORT = 3001;
const mongo = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017";
const Associationcontroller = require('./1.controller/association/associationcontroller');

const app = express()
app.use(express.json())

app.listen(
    PORT, 
    () => console.log("Time to Krummmble")
)



/////////////////////////////////////////////// ASSOCIATIONS //////////////////////////////////////////////////////

app.get('/associations', (req, res) => { Associationcontroller.getAll(req, res) })
app.get('/associations/:id', (req, res) => { Associationcontroller.getSingle(req, res) })
app.post("/associations/", (req, res) => { Associationcontroller.addSingle(req,res) })
app.patch("/associations/:id", (req, res) => { Associationcontroller.updateSingle(req,res) })
app.delete("/associations/:id", (req, res) => { Associationcontroller.deleteSingle(req,res)})
