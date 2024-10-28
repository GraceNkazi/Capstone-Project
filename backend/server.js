require('dotenv').config
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()
const PORT = process.env.PORT || 8080;


// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())
app.use(cors());


//Get request
// app.get('/', (req, res) => {
//     res.json({mssg: 'My name is Grace'})

// })

// routes
app.use('/api/workouts', workoutRoutes)



//Error handling middleware
app.use((error, req, res, next) =>{
    res.status(404).send(error);
    next();
});

//Connect db
mongoose.connect(process.env.MONGO_URI)
.then(() => {

    //listen for requests
app.listen(PORT, () => {
    console.log('connected to db & listening on port',  process.env.PORT)
})
})



.catch((error) => {
    console.log(error)
    
})