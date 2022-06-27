const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
var ObjectId = require('mongodb').ObjectId; 
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
      associations = db.collection("associations")
    }
  )


async function getAll()
{
    return new Promise(function(resolve, reject) {
        associations.find().toArray((err, items) => {
            if (err) {
            console.error(err)
            reject({ err : err })
            }
            resolve({associations : items});
        })
    })
}

async function getSingle(req)
{
    return new Promise(function(resolve, reject) {
    const id = req.params.id;
    associations.find({ _id: ObjectId(`${id}`) }).toArray((err, items) => {
        if (err) {
          console.error(err)
          reject({ err : err })
        }
        resolve({  association : items[0] })
      })
    })
}

async function addSingle(req)
{
  return new Promise(function(resolve, reject) {
    const name = req.body.name
    //FIX ME : ASSOCIATION FIELD

    associations.insertOne({ name: name /*FIX ME :ASSOCIATION FIELD*/ }, (err, result) => { 
        if (err) {
          console.error(err)
          reject({ err : err })
          }
        resolve({ response : result})
      })
    })
}

async function updateSingle(req)
{
  return new Promise(function(resolve, reject) {
    const id = req.params.id
    var newvalues = { $set: req.body };
    
    associations.updateOne({ _id: ObjectId(`${id}`)}, newvalues , (err, result) => { 
        if (err) {
          console.error(err)
          reject({ err : err })
          }
        resolve({ response : result})
      })
    })
}


async function deleteSingle(req)
{
  const id = req.params.id;
  return new Promise(function(resolve, reject) {
    associations.deleteOne({ _id: ObjectId(`${id}`) }, (err, result) => { 
      if (err) {
        console.error(err)
        reject({ err: err })
      }
      resolve({ response : result})
    })
  })
}

module.exports = {getAll, getSingle, addSingle, deleteSingle, updateSingle};