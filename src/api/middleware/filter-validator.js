const Joi = require('joi');

const filterParamsSchema = Joi.object({
	user_id: Joi.string().guid().required(),
});

module.exports = {
	filterParamsSchema,
};
