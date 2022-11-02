const db = require('../../config/db/models');
const uuid = require('uuid4');

const getAllUsers = async (req, res) => {
	try {
		const users = await db.User.findAll({
			attributes: [[id, id]],
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
		const users = await db.Users.create({
			id: uuid(),
			first_name: 'Karine',
			family_name: 'Moraes',
			phone_number: '21972713315',
			email: 'karine.moraes@gmail.com',
			birth_date: '2004/10/15',
			sex: 'feme',
		});
		console.log('chegamos no USER CONTROLLER');
		res.json(users);
		//TODO get all no banco}
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_USERS');
	}
};

const deleteUser = async (req, res) => {
	try {
		const users = await db.Users.destroy({
			where: { first_name: 'Karine' },
		});
		console.log('chegamos no USER CONTROLLER');
		res.json(users);
		//TODO get all no banco}
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_USERS');
	}
};

module.exports = {
	getAllUsers,
	createUser,
	deleteUser,
};
