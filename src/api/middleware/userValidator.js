const Joi = require('joi');

const userQuerySchema = Joi.object({
	id: Joi.string().guid().required(),
});

const userDefaultBodySchema = Joi.object({
	first_name: Joi.string().required(),
	email_adress: Joi.string().email().required(),
	phone_number: Joi.string().max(11).min(11).required(),
	birthday: Joi.date().required(),
	password: Joi.string().required(),
});

module.exports = {
	userQuerySchema,
	userDefaultBodySchema,
};
