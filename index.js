const express = require('express')
const { dbConnection } = require('./database/config')
require('dotenv').config()

const app = express();

//database 
dbConnection();

console.log(process.env)

app.get('/', (req, res) => {
    res.status(400).json({
        ok: true,
        msg: 'hola mundo'
    })
});

app.listen(process.env.PORT, () => {
    console.log('server runing port ' + 3000)
})

