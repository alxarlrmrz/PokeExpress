const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3003;
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
});

// const fruits = require('./models/fruits.js');---> refers to array of objects called fruits
 //NOTE: it must start with ./ if it's just a file, not an NPM package
 

//setting up our views
app.set('view engine', 'jsx') //setting up our HTML template
app.engine('jsx', require('express-react-views').createEngine()) //Initializing our view engine

//route

app.get('/pokemon/:id', (req, res) => {
     res.render('Show', {pokemon: pokemon[req.params.id]});
 });

//  app.get('/pokemon/:id', function(req, res) {
//     res.send(req.params.id)
// });

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon});
});

app.get('/', (req, res) => {
    res.send('Welcome to Pokemon App!');
});






// Tell the app to listen on port 3000
app.listen(port, function() {
    console.log('Listening on port', port);
   });