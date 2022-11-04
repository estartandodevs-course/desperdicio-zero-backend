const Joi = require('joi');

const userQuerySchema = Joi.object({
	id: Joi.string().guid().required(),
});

const userDefaultBodySchema = Joi.object({
	id: Joi.string().guid().required(),
	first_name: Joi.string().required(),
	family_name: Joi.string().required(),
	phone_number: Joi.string().max(10).min(10).required(),
	email_adress: Joi.string().email().required(),
	birthday: Joi.date().required(),
	sex: Joi.string().required(),
});

module.exports = {
	userQuerySchema,
	userDefaultBodySchema,
};
