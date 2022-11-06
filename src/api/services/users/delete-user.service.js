const userRepository = require('../../db/models/user');

const deleteUsers = async (id) => {
	const deletedUser = await userRepository.destroy({
		where: { id },
	});
	if (!deletedUser) throw new Error('User do not exists');
};

module.exports = { deleteUsers };
