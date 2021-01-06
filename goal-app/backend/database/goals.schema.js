const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalSchema = new Schema(
	{
		username: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		target: {
			type: String,
			required: true
		},
		unit: {
			type: String,
			required: true
		},
		frequency: {
			type: String,
			required: true
		},
		endDate: {
			type: Date,
			required: true
		},
		startDate: {
			type: Date,
			required: true
		},
		date: {
			type: Date,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
