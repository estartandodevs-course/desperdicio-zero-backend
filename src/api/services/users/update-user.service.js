const userRepository = require('../../db/models/user');
const {
	encryptPassword,
	verifyPassword,
} = require('../../utils/encrypt-password');
const Op = require('Sequelize').Op;

const updateUsers = async (
	first_name,
	family_name,
	email_adress,
	phone_number,
	birthday,
	sex,
	password
) => {
	const listPassword = await userRepository.findOne({
		where: {
			[Op.or]: {
				email_adress,
				phone_number,
			},
		},
	});
	const samePassword = await verifyPassword(password, listPassword.password);
	const newPassword =
		samePassword !== true
			? await encryptPassword(password)
			: listPassword.password;
	console.log(newPassword);
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
};

module.exports = { updateUsers };
