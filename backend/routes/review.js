const express = require('express')
const router = express.Router()
const pool = require('../utils/db')
const result = require('../utils/result')

router.post('/create', (req, res) => {
    const { movie_id, review, rating, user_id, modified } = req.body
    const sql = "INSERT INTO reviews(movie_id, review, rating, user_id, modified) VALUES(?, ?, ?, ?, ?)"
    pool.query(sql, [movie_id, review, rating, user_id, modified], (error, data) => {
        console.log(error)
        res.send(result.createResult(error, data))
    })
})

router.put('/edit', (req, res) => {
    const { movie_id, review, rating, user_id, modified } = req.body
    const sql = "UPDATE reviews SET review = ?, rating = ?, modified = ? WHERE movie_id = ? AND user_id = ?"
    pool.query(sql, [review, rating, modified, movie_id, user_id], (error, data) => {
        console.log(error)
        res.send(result.createResult(error, data))
    })
})

