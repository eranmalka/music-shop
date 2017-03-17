var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumScehma = new Schema({
    name:  {type: String, required: true},
    description: String,
    category:  {type: Schema.Types.ObjectId, required: true},
    details: String,
    price: {type: Number, required: true},
    year: {type: Number, required: true},
    artist: {type: String, required: true},
    discount: Number,
    supply: {type: Number, required: true},
    thumbnails: [String]
});

var Album = mongoose.model('Album', AlbumScehma);

module.export = Album;




