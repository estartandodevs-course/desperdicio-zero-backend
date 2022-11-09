const userRepository = require('../../db/models/user');

const loadAllUsers = async () => {
	const usersList = await userRepository.findAll();

	return usersList;
};

module.exports = {
	loadAllUsers,
};
