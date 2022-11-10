const Joi = require('joi');

const authenticateBodySchema = Joi.object({
	email_adress: Joi.string().required(),
	password: Joi.string().required(),
});

module.exports = {
	authenticateBodySchema,
};
