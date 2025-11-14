const express = require('express')
const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')


const config = require('../utils/config')
const router = express.Router()
const pool = require('../utils/db')
const result = require('../utils/result')

router.post('/register', async (req, res) => {
  const { first_name, last_name, email, password, mobile, birth } = req.body
  const sql = `INSERT INTO users(first_name,last_name,email,password,mobile,birth) values(?,?,?,?,?,?)`
  const encryptedPassword = String(cryptoJs.SHA256(password))

  pool.query(sql, [first_name, last_name, email, encryptedPassword, mobile, birth], (error, data) => {
    res.send(result.createResult(error, data))
  })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const encryptedPassword = String(cryptoJs.SHA256(password))
  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`
  pool.query(sql, [email, encryptedPassword], (error, data) => {
    if (data) {
      if (data.length != 0) {
        const payload = {
          userId: data[0].id,
        }
        const token = jwt.sign(payload, config.secret)
        const body = {
          token: token,
          firstName: data[0].firstName,
          lastName: data[0].lastName,
        }
        res.send(result.createSuccessResult(body))
      } else res.send(result.createErrorResult('Invalid email or password'))
    } else res.send(result.createErrorResult(error))
  })
})

router.get('/profile', (req, res) => {
  const sql = `SELECT first_name, last_name, mobile, email,birth FROM users WHERE id = ?`
  pool.query(sql, [req.headers.user_id], (error, data) => {
    res.send(result.createResult(error, data))
  })
})

module.exports = router