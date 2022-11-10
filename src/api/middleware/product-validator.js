const Joi = require('joi');

const productQuerySchema = Joi.object({
	id: Joi.number().integer().required(),
});

const productCompleteBodySchema = Joi.object({
	id: Joi.number().integer().required(),
	user_id: Joi.string().guid().required(),
	category_id: Joi.number().integer().required(),
	name: Joi.string().required(),
	validity: Joi.date().required(),
	location: Joi.string().required(),
	price: Joi.number().required(),
	unit_measurement_id: Joi.number().integer().required(),
	unit: Joi.number().integer().required(),
});

const productBodySchema = Joi.object({
	user_id: Joi.string().guid().required(),
	category_id: Joi.number().integer().required(),
	name: Joi.string().required(),
	validity: Joi.date().required(),
	location: Joi.string().required(),
	price: Joi.number().required(),
	unit_measurement_id: Joi.number().integer().required(),
	unit: Joi.number().integer().required(),
});

module.exports = {
	productQuerySchema,
	productCompleteBodySchema,
	productBodySchema,
};
