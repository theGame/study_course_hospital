var express = require('express');
var app = express();
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs('hospital', ['carousel', 'doctors', 'patients']);
var bodyParser = require('body-parser');

//for whole app
app.use(express.static(__dirname + '/app'));

//for bower folder
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));
app.use(bodyParser.json());


//carousel GET
app.get('/carousel', function(req, res){
  console.log("----recive a GET req-----");

  db.carousel.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

//REST for DOCTORS
// GET DOCTORS
app.get('/doctors', function(req, res){
  console.log("----recive a GET req-----");

  db.doctors.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

// DELETE DOCTOR
app.delete('/doctors/:id', function(req, res){
  var id = req.params.id;
  console.log(id);

  db.doctors.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  })
});

// UPDATE DOCTOR
app.put('/doctors/:id', function(req, res){
  var id = req.params.id;
  console.log(id);

  db.doctors.findAndModify({query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, surname: req.body.surname, room: req.body.room, type: req.body.type, patient_id: req.body.patient_id}},
    new: true}, function(err, doc){
    res.json(doc);
  });
});

//REST for PATIENTS
// GET PATIENTS
app.get('/patients', function(req, res){
  console.log("----recive a GET req-----");

  db.patients.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

// DELETE DOCTOR
app.delete('/patients/:id', function(req, res){
  var id = req.params.id;
  console.log(id);

  db.patients.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  })
});

// UPDATE DOCTOR
app.put('/patients/:id', function(req, res){
  var id = req.params.id;
  console.log(id);

  db.patients.findAndModify({query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, surname: req.body.surname, complaint: req.body.complaint, visit_doctor: req.body.visit_doctor}},
    new: true}, function(err, doc){
    res.json(doc);
  });
});

app.post('/patients', function(req, res){
  console.log(req.body);
  db.patients.insert(req.body, function(err, doc){
    res.json(doc);
  });
});


app.listen(3000);
console.log("Server runnig on port 3000");
