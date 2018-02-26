const db = require('../models')

module.exports = {

    findPages: function(req,res){
        console.log("in find pages")
        db.Blog
        .paginate({}, {
            page: parseInt(req.params.num),
            limit: parseInt(req.params.limit),
            sort: ({dateAdded:-1}),
        })
        .then(function(dbModel){
            console.log("Find Page Blog Post:\n", dbModel)
            res.json(dbModel)
        })
        .catch(function(err){
            console.log("Find Page Blog Post Error:\n", err)
            res.json(err)
        })
    },

    findAll: function(req,res){
        console.log("in find all")
        db.Blog
            .find({})
            .sort({dateAdded:-1})
            .then(function(dbModel){
                console.log("Find All Blog Post:\n", dbModel)
                res.json(dbModel)
            })
            .catch(function(err){
                console.log("Find All Blog Post Error:\n", err)
                res.json(err)
            })
    },

    getOne: function(req, res){
        db.Blog
            .findById({ _id:req.params.id })
            .then(function(dbModel){
                console.log("Find Blog Post:\n")
                res.json(dbModel)                
            })
            .catch(function(err){
                console.log("Find Blog Post Error:\n", err)
                res.json(err)
            })
    }
}



