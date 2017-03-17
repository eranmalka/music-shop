var util = require('util');

var post = function (req, res,next) {
    req.checkBody('name', 'Invalid category name').notEmpty(); 
    req.getValidationResult().then(function(result) {
        if (!result.isEmpty()) {
          res.status(400).send('There have been validation errors: ' + util.inspect(result.array()));
          return;
        }
        else {
            next();
        }
    });
}

module.exports.post = post;


