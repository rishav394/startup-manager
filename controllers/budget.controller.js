const history = require('../models/history.model');

const getHistory = async (req, res, next) => {
	try {
		const data = await history.find({});
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

const addHistory = (req, debit) => {
	const { price } = req;
	var content = { price, debit, transactionDate: new Date().toDateString() };
	history.create(content);
};

module.exports = { addHistory, getHistory };
