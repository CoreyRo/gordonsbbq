const db = require('../models')
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

module.exports = {
    create: function(req, res){

        db.Blog
            .create(req.body)
            .then(function(dbModel){
                console.log("Create New Blog Post:\n", dbModel)
                res.json(dbModel)
            })
            .catch(function(err){
                console.log("Create New Blog Post Error:\n", err)
                res.json(err)
            })
    },

    findAll: function(req,res){

        db.Blog
            .find({})
            .sort({dateAdded:-1})
            .then(function(dbModel){
                console.log("Create New Blog Post:\n", dbModel)
                res.json(dbModel)
            })
            .catch(function(err){
                console.log("Create New Blog Post Error:\n", err)
                res.json(err)
            })

        console.log("in find all")
        // let aggregate = db.Blog.aggregate()
        // let options = {
        //     page: req.params.num,
        //     limit:5,
        //     sortBy: {dateAdded: -1}
        // }
        // aggregate.match({})
        // db.Blog.aggregatePaginate(aggregate, options, function(err, results, pageCount, count){
        //     if(err) {
        //         console.log('findAll Blog Posts Error:\n',err)
        //         res.json(err)
        //     }
        //     else{
        //         let pageRes = {}
        //         pageRes.results = results
        //         pageRes.pageCount = pageCount
        //         pageRes.count = count
        //         console.log('findAll Blog Posts success:\n', pageRes)
        //         res.json(pageRes)
        //     }
        // })
    },

    update: function(req, res){
        db.Blog
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(function(dbModel){
                console.log("update Blog Post:\n", dbModel)
            })
            .catch(function(err){
                console.log("update Blog Post Error:\n", err)
                res.json(err)                
            })
    },

    destroy: function(req, res){
        db.Blog
            .findById({ _id:req.params.id })
            .then(function(dbModel){
                console.log("destroy Blog Post:\n", dbModel)
                dbModel.remove()
                res.json(dbModel)                
            })
            .catch(function(err){
                console.log("destroy Blog Post Error:\n", err)
                res.json(err)
            })
    }
}