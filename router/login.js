/*

Auth module represennts the login authentication
*/

const { User } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')
router.post('/', async (req, response) => {
    User.findOne({ email: req.body.email }).then(userdata => {
        console.log("response use data", userdata)
        if (!userdata) return response.status(400).send('Invalid User')
        bcrypt.compare(req.body.password, userdata.password).then(data => {
            console.log("response", data)
            const token=jwt.sign({_id:data._id},'key')
            console.log("token",token)
            response.send(token)
        })
    })
    console.log('user', user)

})

module.exports = router;