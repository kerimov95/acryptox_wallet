const router = require('express').Router();
const auth = require('./middlewares/auth');
const controllers = require('../controllers');

router.get('/getaddress', auth, controllers.getaddress)
router.get('/getbalance', auth, controllers.getbalance)

module.exports = router;