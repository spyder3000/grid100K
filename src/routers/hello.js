const express = require('express');  
const router = express.Router(); 
const hello = require('../controllers/hello'); 
console.log('JV00 -- routers/hello.js');  
router.get('/', hello.helloText)

module.exports = router; 