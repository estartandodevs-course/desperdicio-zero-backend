const userRepository = require('../../db/models/user');
const { encryptPassword } = require('../../utils/encrypt-password');
const uuid = require('uuid');

const createUsers = async (
	first_name,
	family_name,
	email_adress,
	phone_number,
	birthday,
	sex,
	password
) => {
	const createdUser = await userRepository.create({
		id: uuid.v4(),
		first_name,
		family_name,
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
