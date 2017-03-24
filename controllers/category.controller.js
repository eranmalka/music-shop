var category = require('../models/categories.model'); 

var save = function(req, res, next){
    var newCategory = new category(req.body);
    newCategory.save(function(err) {
      if (err) {
        console.error(err);
        next(err)
      }
      return res.json(newCategory);
    });
}

var getCategories = function(req, res, next){
    category.
        find({}).
        exec(function(err, categories) {
        if(err) {
            console.error(err);
            next(err)
        }
        return res.json(categories);
    })
} 

var deleteCategory = function(req, res, next){
    req.category.remove();
    return res.json(req.category);
}

var updateCategory = function(req, res, next){
    var category = req.category;
    category.name =  req.body.name;
    
    category.save(function(err, updatedCategory) {
        if (err) {
            res.send(err);
        }
        return res.json(updatedCategory);
    });
}

var load = function(req,res, next) {
    category
        .findOne({_id:req.params.id})
        .exec(function(err,category) {
            req.category = category; 
            next();
    });
}

module.exports.createCategory = save;
module.exports.getCategories = getCategories;
module.exports.load = load;
module.exports.deleteCategory = deleteCategory;
module.exports.updateCategory = updateCategory;
