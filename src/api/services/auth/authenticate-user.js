const userRepository = require('../../db/models/user');
const { verifyPassword } = require('../../utils/encrypt-password');

const authenticateUser = async (email_adress, password) => {
	const account = await userRepository.findOne({
		where: { email_adress },
	});

	if (!account) throw new Error('Invalid email');

	const isValidPassword = await verifyPassword(password, account?.password);

	if (!isValidPassword) throw new Error('Invalid password');

	return account;
};

module.exports = { authenticateUser };
