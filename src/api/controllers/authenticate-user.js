const { authenticateUser } = require('../services/index');

const authenticateUserController = async (req, res) => {
	try {
		const user = await authenticateUser(
			req?.body?.email_adress,
			req?.body?.password
		);

		res.json(user);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message,
			status: {
				code: 400,
				name: 'Bad Request',
			},
		});
	}
};

module.exports = {
	authenticateUserController,
};
