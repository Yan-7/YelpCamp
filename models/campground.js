// Importing required modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the schema for Campground model
const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

// Exporting the Campground model
module.exports = mongoose.model('Campground', CampgroundSchema);