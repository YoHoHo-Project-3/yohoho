const express = require("express");
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        User.find(req.params.id)
        res.status(200).json(profile);
    } catch (err) {
        res.json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404);
        }
    } catch (err) {
        console.log(err)
        res.json(err);
    };
})

router.put('/', async (req, res) => {
    try {
        const profile = req.body;
        await User.findByIdAndUpdate(req.session.passport.user, profile);
        const user = await User.findById(req.session.passport.user);
        res.status(200).json(user);
    } catch (err) {
        console.log('error ', err)
        res.json(err)
    }
});

module.exports = router;
