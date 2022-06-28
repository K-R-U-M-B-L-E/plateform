const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
var ObjectId = require('mongodb').ObjectId; 
let db

//CONNECT TO MONGO DB INSTANCE
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
      projects = db.collection("projects")
    }
  )


//GET ALL PROJECTS DOCUMENT
async function getAll()
{
    return new Promise(function(resolve, reject) {
      projects.find().toArray((err, items) => {
        if (err) {
          console.error(err)
          reject({ err : err })
        }
      resolve({projects : items});
      })
    })
}

//GET AN PROJECT DOCUMENT BY ID
async function getSingle(req)
{
    return new Promise(function(resolve, reject) {
    const id = req.params.id;
    projects.find({ _id: ObjectId(`${id}`) }).toArray((err, items) => {
        if (err) {
          console.error(err)
          reject({ err : err })
        }
        resolve({ project : items[0]})
      })
    })
}

//ADD AN PROJECT DOCUMENT
async function addSingle(req)
{
  return new Promise(function(resolve, reject) {
    const newProject = req.body
    
    projects.insertOne(newProject, (err, result) => { 
        if (err) {
          console.error(err)
          reject({ err : err })
          }
        resolve({ response : result})
      })
    })
}


//UPDATE AN PROJECT DOCUMENT
async function updateSingle(req)
{
  return new Promise(function(resolve, reject) {
    const id = req.params.id
    var newvalues = { $set: req.body };
    
    projects.updateOne({ _id: ObjectId(`${id}`)}, newvalues , (err, result) => { 
        if (err) {
          console.error(err)
          reject({ err : err })
          }
        resolve({ response : result})
      })
    })
}

//DELETE AN PROJECT DOCUMENT
async function deleteSingle(req)
{
  const id = req.params.id;
  return new Promise(function(resolve, reject) {

    projects.deleteOne({ _id: ObjectId(`${id}`) }, (err, result) => { 
      if (err) {
        console.error(err)
        reject({ err: err })
      }
      resolve({ response : result})
    })
  })
}

module.exports = {getAll, getSingle, addSingle, deleteSingle, updateSingle};