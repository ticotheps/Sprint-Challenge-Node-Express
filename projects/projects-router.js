const express = require('express');

const Projects = require('../data/helpers/projectModel.js');
const Actions = require('../data/helpers/actionModel.js');

const router = express.Router();

// Uses routing endpoint '/' to return a list of projects from the
// 'http://localhost:5000/api/projects' url.
router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get(req.query);
        res.status(200).json(projects);
    } catch (error) {
        // logs error to the database
        console.log(error);
        res.status(500).json({ 
            message: 'Error retrieving the projects; not enough happiness in your face'
        });
    }
});
