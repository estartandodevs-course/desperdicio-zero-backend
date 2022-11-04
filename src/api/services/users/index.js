const { loadAllUsers } = require('./load-users.service');
const { createUsers } = require('./create-user.service');

module.exports = {
	loadAllUsers,
	createUsers,
};
