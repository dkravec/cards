const router = require('express').Router();
const { checkToken } = require('../../../utils/auth/checkToken');

router.get('/', async (req, res) => {
    const authorized = await checkToken(req.headers);

    if (!authorized.auth) return res.status(401).send({ "error" : authorized });
    return res.status(200).send({ "authorized" : authorized });
});

module.exports = router;