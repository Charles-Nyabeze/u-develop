const express = require('express');
const router = express.Router();
const voterRoutes = require('./voterRoutes')

router.use('/', voterRoutes);
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));


module.exports = router;