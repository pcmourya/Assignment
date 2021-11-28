const mongoose = require('mongoose')

const RestaurentSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: true
      },
      coordinates: {
        type: [Number],
        required: true,
        index: '2dsphere'
      }
    },
    radius: {
        type: Number,
    },
    ratings:Number,
})

module.exports = mongoose.model('Restaurent', RestaurentSchema)
