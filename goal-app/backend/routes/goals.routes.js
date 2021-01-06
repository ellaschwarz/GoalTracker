const { Router } = require('express');
const router = new Router();

const Goal = require('../controllers/goals.controller');

//Creating Goal
router.post('/', Goal.postGoal);

//Reading Goal
router.get('/', Goal.getGoal);

//Reading one Goal
router.get('/:id', Goal.getSingleGoal);

//Updating Goal
router.patch('/:id', Goal.updateGoal);

//Deleting Goal
router.delete('/:id', Goal.deleteGoal);

module.exports = router;
