const userRepository = require('../../db/models/user');
const {
	encryptPassword,
	verifyPassword,
} = require('../../utils/encrypt-password');
const Op = require('sequelize').Op;

const updateUsers = async (
	first_name,
	family_name,
	email_adress,
	phone_number,
	birthday,
	sex,
	password
) => {
	const userData = await userRepository.findOne({
		where: {
			[Op.or]: {
				email_adress,
				phone_number,
			},
		},
	});
	if (userData === null) throw new Error('User do not exists');
	const samePassword = await verifyPassword(password, userData.password);
	const newPassword = !samePassword
		? await encryptPassword(password)
		: userData.password;
	try {
		await userRepository.update(
			{
				first_name,
				family_name,
				email_adress,
				phone_number,
				birthday,
				password: newPassword,
				sex,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				where: {
					[Op.or]: {
						email_adress,
						phone_number,
					},
				},
			}
		);
	} catch (error) {
		throw new Error('server error');
	}
};

module.exports = { updateUsers };
