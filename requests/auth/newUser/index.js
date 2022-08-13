const router = require('express').Router();
const publicUserSchema = require('../../../schemas/user/publicUserSchema');
const privateUserSchema = require('../../../schemas/user/privateUserSchema');
const {v4: uuidv4} = require('uuid');

router.post('/', async (req, res) => {
    const { username, password, description } = req.body;
    if (!username || !password) return res.status(400).send({"error": 'Missing username, password, or description'});
    
    const user = await publicUserSchema.findOne({ username });
    if (user) {
        return res.status(400).send({"error" : 'Username already exists'});
    } else {
        const userID = uuidv4();

        await privateUserSchema.findOneAndUpdate({
            _id: userID,
        }, {
            _id: userID,
            userToken: uuidv4(),
            password,
        }, {
            upsert: true,
        });

        const privUserFound = await privateUserSchema.findOne({_id: userID});
        if (!privUserFound) return res.status(500).send({"error" : 'Something went wrong'});

        await publicUserSchema.findOneAndUpdate({
            _id: userID
        }, {
            _id: userID,
            username,
            timestamp: checktime(),
        }, { 
            upsert: true 
        });

        if (description) {
            await publicUserSchema.findOneAndUpdate({
                _id: userID
            }, {
                description,
            }, { 
                upsert: true 
            });
        };

        const pubUserFound = await publicUserSchema.findOne({_id: userID});
        if (!pubUserFound) return res.status(500).send({"error": 'Something went wrong'});

        return res.status(200).send({"publicUser": pubUserFound, "privateUser": privUserFound});
    };
});

function checktime() {
    var d = new Date();
    const timeMS = d.getTime();

    return timeMS;
};

module.exports = router;