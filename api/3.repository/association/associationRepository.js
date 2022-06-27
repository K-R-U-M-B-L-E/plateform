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
            reject({ err: err })
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
          reject({ err: err })
        }
        resolve({  association : items[0] })
      })
    })
}

module.exports = {getAll, getSingle};