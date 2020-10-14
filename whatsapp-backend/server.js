// importing
const express = require('express');
const mongoose = require('mongoose');
const app = express()

// app config
// midleware
// db config
// api routes



// listen
const port = 5000;
app.listen(port, () => {
    console.log(` app listen to port ${port}`)
})