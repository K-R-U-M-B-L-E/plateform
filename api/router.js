const express = require("express");
const app = express()
app.use(express.json())

const Associationcontroller = require('./1.controller/associationController');
const Projectcontroller = require('./1.controller/projectController');
const Universitycontroller = require('./1.controller/universityController');

const PORT = 3001;
app.listen(
    PORT, 
    () => console.log("Time to Krummmble")
)



app.use((error, request, response, next) => {
  if (error !== null) {
    return response.status(400).json({ err : 'Syntax Error' });
  }
});

/////////////////////////////////////////////// ASSOCIATIONS //////////////////////////////////////////////////////

app.get('/associations', (req, res) => { Associationcontroller.getAll(req, res) })
app.get('/associations/:id', (req, res) => { Associationcontroller.getSingle(req, res) })
app.post('/associations', (req, res) => { Associationcontroller.addSingle(req,res) })
app.patch('/associations/:id', (req, res) => { Associationcontroller.updateSingle(req,res)} )
app.delete('/associations/:id', (req, res) => { Associationcontroller.deleteSingle(req,res)})

/////////////////////////////////////////////// PROJECTS //////////////////////////////////////////////////////

app.get('/projects', (req, res) => { Projectcontroller.getAll(req, res) })
app.get('/projects/:id', (req, res) => { Projectcontroller.getSingle(req, res) })
app.get('/projects/association/:id', (req,res) => { Projectcontroller.getByAsso(req,res) })
app.post('/projects', (req, res) => { Projectcontroller.addSingle(req,res) })
app.patch('/projects/', (req, res) => { Projectcontroller.updateMultiple(req,res)} )
app.patch('/projects/:id', (req, res) => { Projectcontroller.updateSingle(req,res)} )
app.delete('/projects/', (req, res) => { Projectcontroller.deleteMultiple(req,res)})
app.delete('/projects/:id', (req, res) => { Projectcontroller.deleteSingle(req,res)})

/////////////////////////////////////////////// UNIVERSITIES //////////////////////////////////////////////////////

app.get('/universities', (req, res) => { Universitycontroller.getAll(req, res) })
app.get('/universities/:id', (req, res) => { Universitycontroller.getSingle(req, res) })
app.post('/universities', (req, res) => { Universitycontroller.addSingle(req,res) })
app.patch('/universities/:id', (req, res) => { Universitycontroller.updateSingle(req,res)} )
app.delete('/universities/:id', (req, res) => { Universitycontroller.deleteSingle(req,res)})


app.all('*', function(req, res) {
    res.status(400).json({err : "Bad Request"});
})
