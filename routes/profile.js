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
        const user = await User.findById(req.session.user._id);
        if (!prof) {
            res.status(404).json(user);
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.json(err);
    };
})



router.put('/:id', async (req, res) => {
    try {
        const profile = req.body;
        const user = await User.findByIdAndUpdate(req.session.passport.user, profile);
        res.status(200).json(user);
    } catch (err) {
        res.json(err)
    }
});

module.exports = router;
