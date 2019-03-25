require('dotenv').config();
const server = require('./server.js');

const port = process.env.PORT || 4000;

const greeting = process.env.GREETING;

server.listen(port, () => {
    console.log(`\n*** ${greeting}! Server is running http://localhost:${port} ***\n`);
});