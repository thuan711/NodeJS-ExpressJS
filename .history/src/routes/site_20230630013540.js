const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

router.use('/lienhe', siteController.lienhe);
router.use('/', siteController.index);


module.exports = router;