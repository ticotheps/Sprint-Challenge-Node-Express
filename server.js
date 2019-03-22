const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api/api-router.js');
// const projectsRouter = require('./projects/projects-router.js');
// const actionsRouter = require('./actions/actions-router.js');

const db = require('./data/dbConfig.js');

const server = express();

// middleware
server.use(express.json());
server.use(helmet());


server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.send(`
      <h1>Welcome to Tico's Node.js/Express Sprint Challenge API!</h1>
      <h2>Don't worry. Be happy!</h2>
      `);
  });

// server.get('/', async (req, res) => {
//     try {
//         const projects = await db('projects');
//         res.status(200).json({ greeting: `${process.env.GREETING}`, projects});
//     } catch (error) {
//         console.log('\nERROR', error);
//         res.status(500).json({ error: 'Cannot retrieve the projects because Luis said you worry too much!' });
//     }
// });

// server.post('/', async (req, res) => {
//     try {
//         const [id] = await db('projects').insert(req.body);
//         const projects = await db('projects');

//         res.status(201).json(projects);
//     } catch (error) {
//         console.log('\nError', error);
//         res.status(500).json({ error: 'Cannot add the project; there is not enough swagger in it' });
//     }
// });

// server.use('/api/actions', actionsRouter);

// server.get('/', async (req, res) => {
//     try {
//         const actions = await db('actions');
//         res.status(200).json({ greeting: `${process.env.GREETING}`, actions});
//     } catch (error) {
//         console.log('\nERROR', error);
//         res.status(500).json({ error: 'Cannot retrieve the actions because Luis said you worry too much!' });
//     }
// });

// server.post('/', async (req, res) => {
//     try {
//         const [id] = await db('actions').insert(req.body);
//         const actions = await db('actions');

//         res.status(201).json(actions);
//     } catch (error) {
//         console.log('\nError', error);
//         res.status(500).json({ error: 'Cannot add the action; there is not enough swagger in it' });
//     }
// });



module.exports = server;
