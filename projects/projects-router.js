const express = require('express');

const Projects = require('../data/helpers/projectModel.js');
const Actions = require('../data/helpers/actionModel.js');

const router = express.Router();

// Returns a list of projects from the database at the
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

// Finds a specific project in the database by it's id and returns 
// that single project from the 'http://localhost:5000/api/projects' url.
router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.get(req.params.id);
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: 'The project requested was not found' });
        }
    } catch (error) {
        // logs error to the database
        console.log(error);
        res.status(500).json({ 
            message: 'Error retrieving the project; step your happiness-game up first'
        });
    }
});

// Finds a specific project in the database by it's id and returns 
// a list of the actions for that specific project from the 'http://localhost:5000/api/projects' url.
router.get('/:id/actions', async (req, res) => {
    try {
        const actions = await Projects.getProjectActions(req.params.id);
        
            res.status(200).json(actions);
    } catch (error) {
        // logs error to the database
        console.log(error);
        res.status(500).json({ 
            message: 'Error retrieving the actions for the specified project; perhaps you are not smiling enough'
        });
    }
});

