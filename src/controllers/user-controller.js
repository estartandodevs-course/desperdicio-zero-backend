const db = require('../models');

const getAllUsers = async (req, res) => {
	try {
	const users = await db.User.findAll({
		attributes: [
			[id, id]
		]
	});
		console.log('chegamos no USER CONTROLLER', rows);
		res.json(users);
		//TODO get all no banco}
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_USERS');
	}
};

const getUserByid = async (req, res) => {};

const createUser = async (req, res) => {
	try {
	const users = await db.User.create({
		first_name: 'Karine',
		family_name: 'Moraes',
		email: 'karine.moraes@gmail.com',
		birth_date: 2004/10/15
	});
		console.log('chegamos no USER CONTROLLER');
		res.json(users);
		//TODO get all no banco}
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_USERS');
	}
};

const deleteUser = async (req, res) => {};

module.exports = {
	getAllUsers,
	createUser,
};
