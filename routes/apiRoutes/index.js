const express = require('express');
const router = express.Router();
const voterRoutes = require('./voterRoutes')
const voteRoutes = require('./voteRoutes')

router.use('/', voterRoutes);
router.use('/', voteRoutes);
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));



module.exports = router;