const express = require('express');

const projectsRouter = require('../projects/projects-router.js');
const actionsRouter = require('../actions/actions-router.js');

// const db = require('../data/dbConfig.js');

const router = express.Router();


router.use('/projects', projectsRouter);
router.use('/actions', actionsRouter);

module.exports = router;