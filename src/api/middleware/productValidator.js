const Joi = require('joi');

const productQuerySchema = Joi.object({
	id: Joi.number().integer().required(),
});

const productDefaultBodySchema = Joi.object({
	name: Joi.string().required(),
	validity: Joi.date().required(),
	location: Joi.string().required(),
	price: Joi.number().required(),
	weight: Joi.number().required(),
	weightUnit: Joi.string().required(),
});

// const productDefaultBodySchema = Joi.object({
// 	fruits_vegetables: Joi.string().required(),
// 	meats_coldcuts: Joi.string().required(),
// 	cereal_grains: Joi.string().required(),
// 	drinks: Joi.string().required(),
// 	others: Joi.string().required(),
// });

module.exports = {
	productQuerySchema,
	productDefaultBodySchema,
};
