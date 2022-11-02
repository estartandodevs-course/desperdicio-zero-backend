const userRepository = require('../db/models/user');

const getAllUsers = async (req, res) => {
	try {
		const users = await userRepository.findAll();
		res.json(users);
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_USERS');
	}
};

const getUserById = async (req, res) => {
	const id = req.params.id;
	const user = await userRepository.findByPk(id);
	res.json(user);
};

const createUser = async (req, res) => {
	try {
		const newUser = req.body;
		const user = await userRepository.create(newUser);
		res.json(user);
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_USERS');
	}
};

const updateUser = async (req, res) => {
	try {
		const updateUser = req.body;
		const id = req.body.id;
		await userRepository.update(updateUser, {
			where: { id }
		});
		res.json();
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_USERS');
	}
};

const deleteUser = async (req, res) => {
	try {
		const id = req.params.id;
		await userRepository.destroy({
			where: { id }
		});
		res.json();
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_USERS');
	}
};

module.exports = {
	getAllUsers,
	createUser,
	deleteUser,
	getUserById,
	updateUser
};
