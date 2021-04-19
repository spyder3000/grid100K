const mongoose = require('mongoose'); 
const validator = require('validator');  
//const bcrypt = require('bcryptjs'); 
// const jwt = require('jsonwebtoken'); 

const personSchema = new mongoose.Schema({
    id: {
        type: Number, 
//        required: true, 
//        trim: true 
    }, 
    age: { type: Number }, 
    first_name: { type: String}, 
    last_name: { type: String},
    state: { type: String},
    gender: { type: String},
    score: { type: Number},
    professional: { type: String},
    image: { type: String},
    catchphrase: { type: String},
    favorite_movie: { type: String},
    job: { type: String}
}, {
    timestamps: true
})

const Person = mongoose.model('Persons', personSchema) 

module.exports = Person; 