const { loadAllUsers } = require('./users/load-users.service');
const { createUsers } = require('./users/create-user.service');
const { updateUsers } = require('./users/update-user.service');
const { getUserByID } = require('./users/get-user-by-id.service');
const { deleteUsers } = require('./users/delete-user.service');

module.exports = {
	loadAllUsers,
	createUsers,
	updateUsers,
	getUserByID,
	deleteUsers,
};
