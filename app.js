var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var router = express.Router();

var NoteCtrl = require('./controllers/notes');

// API routes
var notes = express.Router();

notes.route('/notes')
  .get(NoteCtrl.findAllNotes);

notes.route('/notes/new')
  .post(NoteCtrl.createNote);

app.use('/api', notes);

app.listen(process.env.PORT || 5000);
