const Restaurent = require('../models/Restaurent')

//Fetching the nearby data from our database with taking our inputs
exports.getRestaurent = async (req,res,next) => {
    Restaurent.find({
        location:{
            $near:{
                $geometry:{
                    type: 'Point',
                    coordinates:[
                        req.body.long,
                        req.body.lat
                    ]
                },
                $maxDistance: req.body.radius * req.body.radius,
            }
        }
    }).exec((err,location) => {
        if(err){
            console.log(err)
            return res.status(500).send({
                status: false,
                data: err
            })
        }
        if(location){
            return res.status(200).send({
                status:true,
                data: {                   
                name: req.body.name,
                description:req.body.description,
                location,
                ratings: req.body.ratings,
                }
            })
        }
    })
}

// Saving our restaurent data in Database 
exports.saveRestaurent = async (req,res,next) => {
    new Restaurent({
        name:req.body.name,
        description: req.body.description,
        location:{
            coordinates:[
                req.body.long,
                req.body.lat
            ]
        },
        ratings:req.body.ratings
    }).save(function(err,res1){
        if(err){
            throw err
        }
        else{
            return res.json({
                status:true,
                data:res1
            })
        }
    })
}