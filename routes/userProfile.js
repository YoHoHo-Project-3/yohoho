const express = require("express");
const profile = require("../models/profile");
const User = require('../models/User');
const router = express.Router();

router.get('/', (req, res) => {
    User.find()
        .then(profile => {
            res.status(200).json(profile);
        })
        .catch(err => {
            res.json(err);
        })
});


router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(profile => {
            if (!profile) {
                res.status(404).json(profile);
            } else {
                res.status(200).json(profile);
            }
        })
        .catch(err => {
            res.json(err);
        })
});

router.put('/:id', (req, res) => {
    const profile = req.body;
    User.findByIdAndUpdate(
        req.params.id,
        profile,
    ).then(profile => {
        res.status(200).json(profile);
    })
        .catch(err => {
            res.json(err)
        })
});

module.exports = router;
