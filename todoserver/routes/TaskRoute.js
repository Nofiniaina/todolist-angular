const express = require('express');
const router = express.Router();    
const TaskController = require('../controllers/TaskController');

router.get('/all', TaskController.getAllTasks);
router.get('/:id', TaskController.getTask);
router.post('/add', TaskController.addTask);
router.put('/update/:id', TaskController.updateOneTask);
router.delete('/delete/:id', TaskController.deleteOneTask);


module.exports = router;