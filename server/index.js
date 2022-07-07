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
app.get('/jobs-list', async( req, res, next) => {
    const jobs = await JobsList.find({})
    try {
        res.status(200).json({
            status: 'success',
            data: {
                jobs
            }
        })
    } catch (err) {
        next(err)
    }
})

// Create new job
const JobList = require('./JobList')
app.post('/add-job', async (req, res, next) => {
    try {
        const newJob = await JobsList.create(req.body)
        res.status(201).json(newJob)
    } catch (err) {
        next(err)
    }
})

//Edit a job
app.put('/update-job', async (req, res) => {
    const newJobs = req.body.newJobs
    const id = req.body.id

    try {
        await JobList.findById(id, (err, updatedJobs) => {
            updatedJobs.jobs = newJobs
            updatedJobs.save()
            res.send('update')
        })
    } catch (err) {
        console.log(err)
    }
})

// Delete a job
app.delete('/delete-job/:id', async (req, res, next) => {
    try {
        const jobToDelete = await JobList.findByIdAndDelete(req.params.id)
        console.log(jobToDelete)
        if (jobToDelete) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

//---------- START SERVER ----------
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
})