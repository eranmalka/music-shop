var album = require('../models/album.model'); 

var save = function(req, res, next){
    var newAlbum = new album(req.body);
    newAlbum.save(function(err) {
      if (err) {
        console.error(err);
        next(err)
      }
      return res.json(newAlbum);
    });
}

var getAlbums = function(req, res, next){
    album.
        find({}).
        exec(function(err, albums) {
        if(err) {
            console.error(err);
            next(err)
        }
        return res.json(albums);
    })
} 

var deleteAlbum = function(req, res, next){
    req.album.remove();
    return res.json(req.album);
}

var updateAlbum = function(req, res, next){
    req.Album.name =  req.body.name;
    
    //return res.json(req.category);
}

var load = function(req,res, next) {
    album
        .findOne({_id:req.params.id})
        .exec(function(err, album) {
            req.album = album; 
            next();
    });
}

module.exports.createAlbum = save;
module.exports.getAlbums = getAlbums;
module.exports.load = load;
module.exports.deleteAlbum = deleteAlbum;
module.exports.updateAlbum = updateAlbum;
