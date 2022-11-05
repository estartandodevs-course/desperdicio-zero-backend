const userRepository = require('../../db/models/user');

const getUserByID = async (id) => {
	const userData = await userRepository.findByPk(id);
	if (userData === null) throw new Error('User do not exists');

	return userData;
};

module.exports = { getUserByID };
