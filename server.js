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

module.exports = server;
