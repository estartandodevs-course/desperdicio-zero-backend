const Joi = require('joi');

const productQuerySchema = Joi.object({
	fruits_vegetables: Joi.string().required(),
	meats_coldcuts: Joi.string().required(),
	cereal_grains: Joi.string().required(),
	drinks: Joi.string().required(),
	others: Joi.string().required(),
});

module.exports = {
	productQuerySchema,
};
