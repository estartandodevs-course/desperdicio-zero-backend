const { loadAllUsers, createUsers } = require('../services/users/index');
const userRepository = require('../db/models/user');
const { updateUsers } = require('../services/users/update-user.service');

const getAllUsers = async (req, res) => {
	try {
		const users = await loadAllUsers();
		res.json(users);
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_USERS');
	}
};

const getUserById = async (req, res) => {
	try {
		const id = req.query.id;
		const user = await userRepository.findByPk(id);
		res.json(user);
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_USER_BY_ID');
	}
};

const createUser = async (req, res) => {
	try {
		const {
			first_name,
			family_name,
			email_adress,
			phone_number,
			birthday,
			sex,
			password,
		} = req.body;
		const newUser = await createUsers(
			first_name,
			family_name,
			email_adress,
			phone_number,
			birthday,
			sex,
			password
		);
		res.json(newUser);
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_CREATE_USER');
	}
};

const updateUser = async (req, res) => {
	try {
		const {
			first_name,
			family_name,
			email_adress,
			phone_number,
			birthday,
			sex,
			password,
		} = req.body;
		await updateUsers(
			first_name,
			family_name,
			email_adress,
			phone_number,
			birthday,
			sex,
			password
		);
		res.json();
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_UPDATE_USER');
	}
};

const deleteUser = async (req, res) => {
	try {
		const id = req.query.id;
		await userRepository.destroy({
			where: { id },
		});
		res.json();
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_DELETE_USER');
	}
};

module.exports = {
	getAllUsers,
	createUser,
	deleteUser,
	getUserById,
	updateUser,
};
