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


let db
mongo.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, client) => {
      if (err) {
        console.error(err)
        return
      }
      db = client.db("krumble-catalogue")
      users = db.collection("user")
      associations = db.collection("associations")
      projects = db.collection("projects")
      tags = db.collection("tags")
    }
  )

/////////////////////////////////////////////// ASSOCIATIONS //////////////////////////////////////////////////////

app.get('/associations', (req, res) => { Associationcontroller.getAll(req, res) })
app.get('/associations/:id', (req, res) => { Associationcontroller.getSingle(req, res) })
app.post("/associations/", (req, res) => { Associationcontroller.addSingle(req,res) })
app.patch("/associations/:id", (req, res) => { Associationcontroller.updateSingle(req,res) })
app.delete("/associations/:id", (req, res) => { Associationcontroller.deleteSingle(req,res)})


/*app.get("/associations", (req, res) => {
    
  associations.find().toArray((err, items) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    res.status(200).json({ associations : items })
  })
})

app.get("/associations/:name", (req, res) => {
  
  const name = req.params.name;
  associations.find({ name: name }).toArray((err, items) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ associations : items[0] })
    })
})

app.get("/associations/:id", (req, res) => {
    const id = req.params.id;
    console.log("search by id")
    associations.find({_id: ObjectId(`${id}`) }).toArray((err, items) => {
        if (err) {
          console.error(err)
          res.status(500).json({ err: err })
          return
        }
        res.status(200).json({  association : items[0] })
      })
})

app.post("/associations/add", (req, res) => {
    const name = req.body.name
    //FIX ME : ASSOCIATION FIELD

    associations.insertOne({ name: name }, (err, result) => { 
        if (err) {
                console.error(err)
                res.status(500).json({ err: err })
                return
            }
            res.status(200).send("New association successfully created !")
        })
})

app.delete("/associations/:id", (req, res) => {

  associations.deleteOne({ id: _id }, (err, result) => { 
      if (err) {
              console.error(err)
              res.status(500).json({ err: err })
              return
          }
          res.status(200).send(result)
      })
})*/
