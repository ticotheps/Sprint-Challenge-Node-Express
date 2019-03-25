const express = require('express');

const Projects = require('../data/helpers/projectModel.js');

const db = require('../data/dbConfig.js');

const router = express.Router();

// Returns a list of projects from the database at the
// 'http://localhost:5000/api/projects' url
router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get(req.query.url);
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
// that single project from the 'http://localhost:5000/api/projects' url
router.get('/:id', async (req, res) => {
    try {
        const projectId = await Projects.get(req.params.id);
        if (projectId) {
            res.status(200).json(projectId);
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
// a list of the actions for that specific project from the 'http://localhost:5000/api/projects' url
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

// Adds a new project to the database
router.post('/', async (req, res) => {
    try {
        const project = await Projects.insert(req.body);
        res.status(200).json(project);
    } catch (error) {
        // logs error to the database
        console.log(error);
        res.status(500).json({ 
            message: 'Error adding the new project'
        });
    }
});

// Finds a specific project in the database by it's id and updates 
// one or more properties on that specific project
router.put('/:id', async (req, res) => {
    try {
        const project = await Projects.update(req.params.id, req.body);
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: 'The project requested could not be found' });
        }
    } catch (error) {
        // logs error to the database
        console.log(error);
        res.status(500).json({ 
            message: 'Error updating the specified project; perhaps if you laughed more often'
        });
    }
});

// Finds a specific project in the database by it's id and deletes 
// that specific project from the database.
router.delete('/:id', async (req, res) => {
    try {
        const count = await Projects.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({ message: 'The project has been deleted successfully' });
        } else {
            res.status(404).json({ message: 'The specified project could not be found' });
        }
    } catch (error) {
        // logs error to the database
        console.log(error);
        res.status(500).json({ 
            message: 'Error removing the specified project; tell me a good joke and I might change my mind'
        });
    }
});

module.exports = router;

