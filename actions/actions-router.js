// const express = require('express');

// const Actions = require('../data/helpers/actionModel.js');

// const db = require('../data/dbConfig.js');

// const router = express.Router();

// // Returns a list of actions from the database at the
// // 'http://localhost:5000/api/projects' url
// router.get('/', async (req, res) => {
//     try {
//         const actions = await Actions.get(req.query);
//         res.status(200).json(actions);
//     } catch (error) {
//         // logs error to the database
//         console.log(error);
//         res.status(500).json({ 
//             message: 'Error retrieving the actions; not enough happiness in your face'
//         });
//     }
// });

// // Finds a specific action in the database by it's id and returns 
// // that single action from the 'http://localhost:5000/api/projects' url
// router.get('/:id', async (req, res) => {
//     try {
//         const action = await Actions.get(req.params.id);
//         if (action) {
//             res.status(200).json(action);
//         } else {
//             res.status(404).json({ message: 'The action requested was not found' });
//         }
//     } catch (error) {
//         // logs error to the database
//         console.log(error);
//         res.status(500).json({ 
//             message: 'Error retrieving the action; step your happiness-game up first'
//         });
//     }
// });

// // Adds a new action to the database
// router.post('/', async (req, res) => {
//     try {
//         const action = await Actions.insert(req.body);
//         res.status(200).json(action);
//     } catch (error) {
//         // logs error to the database
//         console.log(error);
//         res.status(500).json({ 
//             message: 'Error adding the new action to the database'
//         });
//     }
// });

// // Finds a specific action in the database by it's id and updates 
// // one or more properties on that specific action object
// router.put('/:id', async (req, res) => {
//     try {
//         const action = await Actions.update(req.params.id, req.body);
//         if (action) {
//             res.status(200).json(action);
//         } else {
//             res.status(404).json({ message: 'The action requested could not be found' });
//         }
//     } catch (error) {
//         // logs error to the database
//         console.log(error);
//         res.status(500).json({ 
//             message: 'Error updating the specified action; perhaps if you laughed more often'
//         });
//     }
// });

// // Finds a specific action in the database by it's id and deletes 
// // that particular action from the database.
// router.delete('/:id', async (req, res) => {
//     try {
//         const count = await Actions.remove(req.params.id);
//         if (count > 0) {
//             res.status(200).json({ message: 'The action has been deleted successfully' });
//         } else {
//             res.status(404).json({ message: 'The specified action could not be found' });
//         }
//     } catch (error) {
//         // logs error to the database
//         console.log(error);
//         res.status(500).json({ 
//             message: 'Error removing the specified action; tell me a good joke and I might change my mind'
//         });
//     }
// });

// module.exports = router;