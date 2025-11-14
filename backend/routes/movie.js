const express = require('express')
const router = express.Router()
const pool = require('../utils/db')
const result = require('../utils/result')

router.get('/', (req, res) => {
    const sql = "SELECT * FROM movies"
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = router