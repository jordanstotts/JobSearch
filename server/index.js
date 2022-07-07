//---------- BASIC CONFIG ----------
const express = require('express');
require('./connection');
const app = express();

app.set('port', 2001)
const cors + require('cors');
app.use(cors());

//---------- MIDDLEWARE ----------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//---------- ROUTES ----------
// Redirect
app.get('/', (req, res) => {
    res.redirect('/jobs-list')
})

// Controllers

// Get request for all jobs

// Create new job

//Edit a job

// Delete a job

//---------- START SERVER ----------
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
})