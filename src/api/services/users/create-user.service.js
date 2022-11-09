const userRepository = require('../../db/models/user');
const { encryptPassword } = require('../../utils/encrypt-password');

const createUsers = async (
	name,
	email_adress,
	phone_number,
	birthday,
	sex,
	password
) => {
	const isUserEmail = await userRepository.findOne({
		where: { email_adress },
	});
	if (isUserEmail) throw new Error('User email already in use');

	const isUserPhone = await userRepository.findOne({
		where: { phone_number },
	});
	if (isUserPhone) throw new Error('User phone already in use');

	const createdUser = await userRepository.create({
		name,
		email_adress,
		phone_number,
		birthday,
		password: await encryptPassword(password),
		sex,
		created_at: new Date(),
		updated_at: new Date(),
	});
	return createdUser;
};

module.exports = { createUsers };
