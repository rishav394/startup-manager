const rawMaterial = require('../models/rawMaterial.model');
const historyController = require('./budget.controller');

const createRawMaterial = async (req, res, next) => {
	try {
		const data = await rawMaterial.create(req.body);
		res.status(201).json(data);
		historyController.addHistory(req.body, true);
	} catch (error) {
		next(error);
	}
};

const getRawMaterials = async (req, res, next) => {
	try {
		const data = await rawMaterial.find({});
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

const updateRawMaterial = async (req, res, next) => {
	try {
		const newItem = await rawMaterial.findByIdAndUpdate(
			req.params.rawMaterialId,
			req.body,
			{
				new: true,
				useFindAndModify: false,
			},
		);
		if (!newItem) return res.sendStatus(404);
		res.json(newItem);
	} catch (error) {
		next(error);
	}
};

const deleteRawMaterial = async (req, res, next) => {
	try {
		const deleted = await rawMaterial.findByIdAndDelete(
			req.params.rawMaterialId,
		);
		if (!deleted) return res.sendStatus(404);
		// res.redirect('back');
		res.json(deleted);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	createRawMaterial,
	deleteRawMaterial,
	updateRawMaterial,
	getRawMaterials,
};
