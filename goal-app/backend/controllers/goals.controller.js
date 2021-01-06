let Goal = require('../database/goals.schema');

const getGoal = (req, res) => {
	Goal.find()
		.then(goals => res.json(goals))
		.catch(err => res.status(400).json('Error: ' + err));
};

const postGoal = (req, res) => {
	const { username, title, description, target, unit, frequency } = req.body;
	const endDate = Date.parse(req.body.endDate);
	const startDate = Date.parse(req.body.startDate);

	Goal.create({
		username,
		title,
		description,
		target,
		unit,
		frequency,
		endDate,
		startDate
	})
		.then(() => res.json('Goal added'))
		.catch(err => res.status(400).json('Error: ' + err));
};

const getSingleGoal = (req, res) => {
	Goal.findById(req.params.id)
		.then(goal => res.json(goal))
		.catch(err => res.status(400).json('Error:' + err));
};

const updateGoal = (req, res) => {
	Goal.findById(req.params.id)
		.then(goal => {
			goal.username = req.body.username;
			goal.title = req.body.title;
			goal.description = req.body.description;
			goal.target = req.body.target;
			goal.unit = req.body.unit;
			goal.frequency = req.body.frequency;
			goal.endDate = Date.parse(req.body.endDate);
			goal.startDate = Date.parse(req.body.startDate);

			goal
				.save()
				.then(() => res.json('Goal updated!'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
};

const deleteGoal = (req, res) => {
	Goal.findByIdAndDelete(req.params.id)
		.then(() => res.json('Goal deleted.'))
		.catch(err => res.status(400).json('Error: ' + err));
};

module.exports = { getGoal, postGoal, deleteGoal, updateGoal, getSingleGoal };
