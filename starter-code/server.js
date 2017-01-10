'use strict';

// done: Initialize your project using NPM to create and populate a package.json file
// done: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// done: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

app.get('/index.html', function(request, response) {
  // done: Using the response object, send the index.html file back to the user
  response.sendFile('index.html', {root: './public'});
});

// done: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('new.html', function(request, response) {
  response.sendFile('new.html', {root: './public'});
});
app.get('*', function(request, response){
  console.log('New request', request.url);
  response.sendFile('404.html', {root: './public'});
})
app.listen(PORT, function() {
  // done: Log to the console a message that lets you know which port your server has started on
  console.log('server is up and running. and can be accessed at localhost:5000');
});
