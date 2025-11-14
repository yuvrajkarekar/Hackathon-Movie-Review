const express = require('express')
const router = express.Router()
const pool = require('../utils/db')
const result = require('../utils/result')

router.get('/',(res, res) => {
    const sql = "SELECT * FROM movies"
    pool.query(sql, (error, data) => {
        res.setEncoding(result.createResult(error, data))
    })
})