/* the starting point for our application -- creates an express app & gets it running;  references to 2 routers for various HTTP requests */
const express = require('express'); 
const path = require('path');   // core node module (nodejs.org);  do not need to install via npm i xxx on cmd prompt
// const hbs = require('hbs'); 
var cors = require('cors'); 

require('./db/mongoose')  // will connect to mongoose
const personRouter = require('./routers/person'); 

const app = express()
if (process.env.NODE_ENV !== 'production') {
   app.use(cors()); 
}

// DEfine paths for Express config;  __dirname is path to current directory;  path.join to go up one level & into public dir;  
// JV   const publicDirectoryPath = path.join(__dirname, '../public');  // this line will match to public files first (e.g. index.html) prior to app.get stmts below  
// const partialsPath = path.join(__dirname, '../templates/partials'); 
//const viewsPath = path.join(__dirname, '../templates/views');  // express defaults to 'views' folder;  this modifies that to 'templates/views' instead 

// Setup handlebars engine & views location 
// app.set('view engine', 'hbs');     // e.g. set up a view engine (handlebar) for Express 
//app.set('views', viewsPath);   // express default is 'views' folder for .hbs content;  this overrides that  
// hbs.registerPartials(partialsPath);  

// JV  app.use(express.static(publicDirectoryPath))   // Setup static directory;  app.use to customize our server;  

/* functions provided by express */
// express.json() -- setup express to automatically parse incoming json (e.g. from POST) to an object so we can access in 
//      our request handlers -- e.g. req.body within  app.post('/users', (req, res) => { ... req.body

const publicPath = path.join(__dirname, '../client/public'); 

// app.use(express.json());    
app.use('/api/', personRouter);
// Serve static assets if in Production  
console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV); 
if (process.env.NODE_ENV === 'production') {
   // Set static folder 
//   app.use(express.static('client/public')); 
   console.log('path = ' + publicPath);  
   app.use(express.static(publicPath)); 
   app.get('/', (req, res) => {
      console.log('index.html at -- ' + path.join(publicPath, 'index.html')); 
      res.sendFile(path.join(publicPath, 'index.html')); 
   })
}

module.exports = app
