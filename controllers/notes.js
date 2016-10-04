//GET - Return all tvshows in the DB
var mongojs = require('mongojs');
var db = mongojs('mongodb://toor:root@dbh42.mlab.com:27427/recomendify', ['note']);

exports.findAllNotes = function(req, res) {
    db.note.find(function (err, docs) {
      if(err) res.send(500, err.message);
      console.log('GET /notes');
      res.status(200).jsonp(docs);
    });
};

exports.createNote = function(req, res) {
    var about = req.param('about');
    var registered = '2016-05-01T09:36:03 +05:00';
    db.note.save({isActive: true, about: about, registered: registered}, function (err, docs) {
      if(err || about == null) res.sendStatus(500);
      console.log('GET /notes/new');
      res.status(200).jsonp(about);
    });
};
