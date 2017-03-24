var util = require('util');

function continueNext(next) {
    next();
}

function failCallbackFallback(res,result) {
    res.status(400).send('There have been validation errors: ' + util.inspect(result.array()));
}

var checkValidation = function(req,res,next,failCallback,successCallback) {
    if(!successCallback) {
        successCallback = continueNext;
    }
    if(!failCallback) {
        failCallback = failCallbackFallback;
    }
    
    req.getValidationResult().then(function(result) {
        if (!result.isEmpty()) {
          failCallback(res,result);
          return;
        }
        else {
            successCallback(next);
        }
    });
}

var post = function (req, res,next) {
    req.checkBody('name', 'Invalid category name').notEmpty(); 
    checkValidation(req,res,next);
}

var load = function(req,res, next) {
    console.log(req.params);
    req.checkParams('id', 'Invalid category id').notEmpty();
    checkValidation(req,res,next);
}

var putValidation = function(req,res, next){
    req.checkBody('name', 'categoty name empty').notEmpty();
    checkValidation(req,res,next);
}

module.exports.post = post;
module.exports.load = load;
module.exports.put = putValidation;


