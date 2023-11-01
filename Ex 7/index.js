const express = require('express') 

const app = express() 

const port = 3000 

 
 

// GET method route 

app.get('/', (req, res) => { 

  res.send('Retrieving hugs from the server 🤗') 

}) 

 
 

// POST method route 

app.post('/', (req, res) => { 

  res.send("Sending hugs from here 🤗") 

}) 

 
 

// Load Middleware functions for all HTTP methods 

app.all('/surprise', (req, res) => { 

  console.log('Hi! This is a surprise!') 

  //next() //Passes the control to the next section 

}) 

 
 

app.get('/payphone', (req, res) => { 

  res.sendFile(__dirname + '/payphone.html'); 

}) 

 
 

app.listen(port, () => { 

  console.log(`Example app listening on port ${port}`) 

}) 