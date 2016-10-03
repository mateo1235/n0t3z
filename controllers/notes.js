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
