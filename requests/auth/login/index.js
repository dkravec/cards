const router = require('express').Router();
const publicUserSchema = require('../../../schemas/user/publicUserSchema');
const privateUserSchema = require('../../../schemas/user/privateUserSchema');
const {v4: uuidv4} = require('uuid');

router.get('/', async (req, res) => {
    const { username, password } = req.headers;

    if (!username || !password) return res.status(400).send({"error": 'Missing username, password, or description'});

    const pubUserFound = await publicUserSchema.findOne({ username });
    
    if (!pubUserFound) {
        return res.status(400).send({"error" : 'Username does not exist.'});
    } else {
        const privUserFound = await privateUserSchema.findOne({_id: pubUserFound._id});
        if (!privUserFound) return res.status(500).send({"error" : 'There was no private index for this user, please contact an admin.'});

        if (privUserFound.password !== password) return res.status(400).send({"error" : 'Incorrect password.'});

        return res.status(200).send({"publicUser": pubUserFound, "privateUser": privUserFound});
    };
});

module.exports = router;