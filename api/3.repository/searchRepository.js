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
      associations = db.collection("associations")
    }
  )


//GET ALL ASSOCIATIONS DOCUMENT
async function search(pipeline)
{
    return new Promise(function(resolve, reject) {
      associations.aggregate(pipeline).toArray((err, items) => {
        if (err) {
          console.err(err)
          reject({ err : err })
        }
      resolve({associations : items});
      })
    })
}

module.exports = {search};