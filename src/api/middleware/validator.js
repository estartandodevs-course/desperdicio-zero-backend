const Joi = require('joi');

const userQuerySchema = Joi.object({
	id: Joi.string().required(),
});

const userDefaultBodySchema = Joi.object({
	id: Joi.number().required(),
	first_name: Joi.string().required(),
	family_name: Joi.string().required(),
	email_address: Joi.string().required(),
	birth_date: Joi.string().required(),
});

const productQuerySchema = Joi.object({
	fruits_vegetables: Joi.string().required(),
	meats_coldcuts: Joi.string().required(),
	cereal_grains: Joi.string().required(),
	drinks: Joi.string().required(),
	others: Joi.string().required(),
});

module.exports = {
	userQuerySchema,
	productQuerySchema,
	userDefaultBodySchema,
};
