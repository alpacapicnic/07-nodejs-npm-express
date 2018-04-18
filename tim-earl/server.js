'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
let app = express();

app.use(express.static('./public'));

app.get('/new', (request, response) => {
  response.sendFile('new.html', {root: './public'});
});

// REVIEW: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that

app.post('/articles', express.urlencoded(), function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.use((req, res) => {
  res.status(404).send('Sorry that route does not exist.');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
