const { Course } = require('../models/course');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
router.post('/', async (req, response) => {

    course = new Course({ name: req.body.name,
         description:req.body.description,coursevideoUrl:req.body.coursevideoUrl })
    course.save().then(res => {
      console.log("res", res)
      response.json({
        status: true, message: 'Record inserted...'

      })
    }).catch(error => {
      console.log("error", error)
    });

})
router.get('/', (req, res) => {
    Product.find(function (error, result) {
            
        if (error) {
            return res.json({ status: false, message: 'Db fail....', error: error })
        }
        else {
            res.json({
                status: true, message: 'Db find Success...',
                result: result
            })
        }

    })
})


module.exports = router;
//hello