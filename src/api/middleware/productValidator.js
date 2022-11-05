const Joi = require('joi');

const productQuerySchema = Joi.object({
	id: Joi.number().integer().required(),
});

const productCompleteBodySchema = Joi.object({
	id: Joi.number().integer().required(),
	category_id: Joi.number().integer().required(),
	name: Joi.string().required(),
	validity: Joi.date().required(),
	location: Joi.string().required(),
	price: Joi.number().required(),
	weight: Joi.number().required(),
	weightUnit: Joi.string().required(),
});

const productBodySchema = Joi.object({
	category_id: Joi.number().integer().required(),
	name: Joi.string().required(),
	validity: Joi.date().required(),
	location: Joi.string().required(),
	price: Joi.number().required(),
	weight: Joi.number().required(),
	weightUnit: Joi.string().required(),
});

module.exports = {
	productQuerySchema,
	productCompleteBodySchema,
	productBodySchema,
};
