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
      users = db.collection("users")
    }
  )


//GET ALL UINVERSITIES DOCUMENT
async function getAll()
{
    return new Promise(function(resolve, reject) {
      users.find().toArray((err, items) => {
        if (err) {
          console.error(err)
          reject({ err : err })
        }
      resolve({users : items});
      })
    })
}

//GET AN USER DOCUMENT BY ID
async function getSingle(req)
{
    return new Promise(function(resolve, reject) {
    const id = req.params.id;
    users.find({ _id: ObjectId(`${id}`) }).toArray((err, items) => {
        if (err) {
          console.error(err)
          reject({ err : err })
        }
        resolve({  user : items[0] })
      })
    })
}

//ADD AN USER DOCUMENT
async function addSingle(req)
{
  return new Promise(function(resolve, reject) {
    const newAssociation = req.body
    
    users.insertOne(newAssociation, (err, result) => { 
        if (err) {
          console.error(err)
          reject({ err : err })
          }
        resolve({ response : result})
      })
    })
}


//UPDATE AN USER DOCUMENT
async function updateSingle(req)
{
  return new Promise(function(resolve, reject) {
    const id = req.params.id
    var newvalues = { $set: req.body };
    
    users.updateOne({ _id: ObjectId(`${id}`)}, newvalues , (err, result) => { 
        if (err) {
          console.error(err)
          reject({ err : err })
          }
        resolve({ response : result})
      })
    })
}

//DELETE AN USER DOCUMENT
async function deleteSingle(req)
{
  const id = req.params.id;
  return new Promise(function(resolve, reject) {

    users.deleteOne({ _id: ObjectId(`${id}`) }, (err, result) => { 
      if (err) {
        console.error(err)
        reject({ err: err })
      }
      resolve({ response : result})
    })
  })
}

module.exports = {getAll, getSingle, addSingle, deleteSingle, updateSingle};