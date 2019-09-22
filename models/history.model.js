const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
	transactionDate: {
		type: Date,
		default: new Date().toDateString(),
	},
	price: {
		type: Number,
		required: true,
		default: 0,
	},
	debit: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model('history', historySchema);
