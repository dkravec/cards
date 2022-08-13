const router = require('express').Router();
const search = require('./get/search');
const newUser = require('./auth/newUser/index');
const login = require('./auth/login');
const checkToken = require('./auth/checkToken');

// GET
router.use('/get/search', search);
// AUTH
router.use('/auth/newUser', newUser);
router.use('/auth/login', login);
router.use('/auth/checkToken', checkToken);

module.exports = router;
