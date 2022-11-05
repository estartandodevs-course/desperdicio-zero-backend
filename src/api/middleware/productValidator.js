const Joi = require('joi');

const productQuerySchema = Joi.object({
	id: Joi.number().integer().required(),
});

const productDefaultBodySchema = Joi.object({
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
	productDefaultBodySchema,
};
