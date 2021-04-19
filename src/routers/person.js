const express = require('express'); 
const Person = require('../models/person')
const router = new express.Router();   /* create a Router */
const validator = require('validator'); 
const misc = require('./Misc'); 

console.log('JV00 - Person Router')
/*  Async -- Send GET data via HTTP request to get all users (e.g. from Postman) -- e.g. localhost:3000/users/  */
router.get('/persons', async (req, res) => {
    try {
        const persons = await Person.find({}).select(    // Person.find() returns promise;  "_id": 0 to exclude _id  
            {"first_name": 1, "last_name": 1, "state": 1, "id": 1, "age": 1, "gender": 1, "score": 1, "professional": 1, "_id": 1});     
        console.log('persons.length = ' + persons.length)
/*        for (let i = 0; i < persons.length; i++) {
            persons[i].fullname = persons[i].first_name + ' ' + persons[i].last_name; 
            if (i == 0) console.log('aa' + persons[i].fullname); 
        }*/
        console.log(persons[0]); 
        //persons.forEach(el => el.fullname = el.first_name + ' ' + el.last_name); 
        res.status(201).send(persons); 
     //   res.status(201).send(persons)
    } catch(e) {
        res.status(400).send(e); 
    }
})



/*  Async -- Send GET data via HTTP request to get all tasks (e.g. from Postman)  */
// e.g. localhost:3000/persons?state=Florida;  
// e.g. localhost:3000/persons?limit=50&skip=50    // e.g. skip is # of documents to skip 
// e.g. localhost:3000/persons?sortBy=last_name:asc  
router.get('/personsFilter', async (req, res) => {
    console.log(req.query); 
    // const match = {}
    // const sort = {}
    // if (req.query.state) {      // ch 119 -- req.query.completed will be the parameter string 'true' or 'false'
    //     match.completed = req.query.completed === 'true'  // will be set to 0 or 1
    // }
    // if (req.query.sortBy) {
    //     const parts = req.query.sortBy.split(':')  // split by special char in URL (e.g. for createdAt: desc)
    //     sort[parts[0]] = (parts[1] == 'desc') ? -1 : 1;   // result will be an object with name of Sort field & 1,-1 -- e.g {createdAt: -1}
    // }
    //let opts = { gender: 'Female', state: 'Tennessee'}; 
    const opts = {};   // gender, state, age, score, & Search Name

    const other = {};  
    other.sort = { id: 1};   // default;  
    console.log('req.query.sort0 = ') + req.query.sort; 
    if (req.query.sort)  {
        if (req.query.sort == 'nameasc') other.sort = { last_name: 1, first_name: 1}; 
        else if (req.query.sort == 'namedesc') other.sort = { last_name: -1, first_name: -1}; 
        else if (req.query.sort == 'scoreasc') other.sort = { score: 1, id: 1}; 
        else if (req.query.sort == 'scoredesc') other.sort = { score: -1, id: 1}; 
        else if (req.query.sort == 'idasc') other.sort = { id: 1}; 
        else if (req.query.sort == 'iddesc') other.sort = { id: -1}; 
        else if (req.query.sort == 'ageasc') other.sort = { age: 1, score: -1, last_name: 1}; 
        else if (req.query.sort == 'agedesc') other.sort = { age: -1, score: -1, last_name: 1}; 
    }
    other.limit = 20;   // default
    other.skip = 0;     // default
    console.log('req.query.sort = ') + req.query.sort; 
    if (req.query.limit && validator.isInt(req.query.limit, {min: 0, max: 500 }) )  other.limit = parseInt(req.query.limit);  
    console.log('req.query.limit = ') + parseInt(req.query.limit); 
    if (req.query.skip && validator.isInt(req.query.skip, { min: 0, max: 5000})) other.skip = parseInt(req.query.skip) * other.limit; 

    // Search feature will search First & Last Name;  Will ignore any other filters  
    if (req.query.str && validator.isAlpha(req.query.str) && validator.isLength(req.query.str, {min: 3})) {
        console.log('STRING mode = ' + req.query.str); 
 //       let regex = '/' + req.query.str + '/i'; 
        let regex = new RegExp(req.query.str,"i"); 
        console.log(regex); 
//        opts.findName = { $or: [{first_name: '/^Tri/i'}, {last_name: '/^Tri/i'}]}; 
        //opts.first_name = regex;  //  /Tri/i; 
        console.log(opts.first_name); 
        opts.findName = { $or: [{first_name: regex}, {last_name: regex}]}; 
        console.log(opts.findName);

        const persons = await Person.find(
            opts.findName, null, other  
        ).select(    // Person.find() returns promise;  "_id": 0 to exclude _id;  otherwise '1' means to include 
        {"first_name": 1, "last_name": 1, "state": 1, "id": 1, "age": 1, "gender": 1, "score": 1, "professional": 1, "_id": 1});  

        console.log('persons.length = ' + persons.length)
        const dat = { persons }; 
 //       dat.tot = 100; 
        dat.tot = await Person.find(opts.findName).countDocuments(); 

        // console.log(dat); 
        res.status(201).send(dat); 

        // console.log('persons.length = ' + persons.length)
        // res.status(201).send(persons); 
        return; 
    }


    if (req.query.stateXX) opts.state = req.query.stateXX.toUpperCase();   
    if (req.query.gender) opts.gender = req.query.gender.toUpperCase();   
//    if (req.query.score) opts.score = { $gte: 450, $lte: 500 }; 
    if (req.query.score) opts.score = misc.getRangeScore(req.query.score);  
    if (req.query.age) opts.age = misc.getRangeAge(req.query.age);
    console.log (opts.score); 
//a    opts.gender = 'm'.toUpperCase(); 
//    opts.state = {'$regex': 'florida',$options:'i'} 
//    opts.state = 'fl'.toUpperCase();
//    opts.first_name = /^Tri/i; 
    

//    other.sort = {state: 1, first_name: -1}; 
console.log('a = ' + JSON.stringify(opts)); 
console.log('b = ' + JSON.stringify(other)); 
    try {
        const persons = await Person.find(
            opts, null, other  
        ).select(    // Person.find() returns promise;  "_id": 0 to exclude _id;  otherwise '1' means to include 
        {"first_name": 1, "last_name": 1, "state": 1, "id": 1, "age": 1, "gender": 1, "score": 1, "professional": 1, "_id": 1});    

        console.log('persons.length = ' + persons.length)
        const dat = { persons }; 
 //       dat.tot = 100; 
        dat.tot = await Person.find(opts).countDocuments(); 

        // console.log(dat); 
        res.status(201).send(dat); 
        // const tasks = await Task.find({});  // Task.find() returns promise;  returns all tasks of all owners

    } catch (e) {
        res.status(400).send(); // 500 is internal server error
    }
})

/*  Async -- GET data via HTTP request to get Person based on id  (e.g. from Postman) -- e.g. localhost:3000/persons/8675  */
router.get('/persons/:id', async (req, res) => {
//    const person = await Person.findById(req.params.id)
    const person = await Person.find({ id: req.params.id}); 
    console.log('SERVER person = ' + person); 
    if (!person) {
        throw new Error()   // will immediately jump to catch (no person)
    }
    res.send(person[0]);      
}); 

router.get('/', async (req, res) => {
    console.log('GET /')
    try {
//        const persons = await Person.find({})   // Person.find() returns promise 
        const persons = await Person.find({}).select(    // Person.find() returns promise;  "_id": 0 to exclude _id  
        {"first_name": 1, "last_name": 1, "state": 1, "id": 1, "age": 1, "gender": 1, "score": 1, "professional": 1, "_id": 1}); 

        console.log('persons.length 2 = ' + persons.length); 
        console.log(persons[0]); 
        res.status(201).json(persons); 
     //   res.status(201).send(persons)
    } catch(e) {
        res.status(400).send(e); 
    }
})

module.exports = router;  