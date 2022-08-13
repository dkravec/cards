const router = require('express').Router();
const search = require('./search');

router.use('/search', search);
// router.use('')

module.exports = router;
