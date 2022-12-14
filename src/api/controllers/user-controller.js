const {
	loadAllUsers,
	createUsers,
	updateUsers,
	getUserByID,
	deleteUsers,
	allUserProducts,
} = require('../services/index');

const getAllUsers = async (req, res) => {
	try {
		const users = await loadAllUsers();
		res.json(users);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_GET_ALL_USERS',
		});
	}
};

const getUserById = async (req, res) => {
	try {
		const id = req.query.id;
		const user = await getUserByID(id);
		res.json(user);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_USER_BY_ID',
		});
	}
};

const getAllUserProducts = async (req, res) => {
	try {
		const id = req.params.id;
		const UserProducts = await allUserProducts(id);
		res.json(UserProducts);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_GET_ALL_USER_PRODUCTS',
		});
	}
};

const createUser = async (req, res) => {
	try {
		const { name, email_adress, phone_number, birthday, sex, password } =
			req.body;
		const newUser = await createUsers(
			name,
			email_adress,
			phone_number,
			birthday,
			sex,
			password
		);
		res.json(newUser);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_CREATE_USER',
		});
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
		res.status(400).json({
			message: error?.message || 'ERROR_TO_UPDATE_USER',
		});
	}
};

const deleteUser = async (req, res) => {
	try {
		const id = req.query.id;
		await deleteUsers(id);
		res.json();
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_DELETE_USER',
		});
	}
};

module.exports = {
	getAllUsers,
	createUser,
	deleteUser,
	getUserById,
	updateUser,
	getAllUserProducts,
};
