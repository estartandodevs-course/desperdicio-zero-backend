const dbConnection = require('../db/startup');

const getAllUsers = async (req, res) => {
    try {
        const { rows } = await dbConnection.query(
            'SELECT id, first_name, family_name, email_address, birth_date FROM public.users'
        );
        console.log('chegamos no USER CONTROLLER', rows);
        res.json('sucesso!');
        //TODO get all no banco}
    } catch (error) {
        console.log(error);
        throw new Error('ERROR_TO_GET_ALL_USERS');
    }
};

const getUserByid = async (req, res) => {

};

const createUser = async (req, res) => {

};

const deleteUser = async (req, res) => {

};


module.exports = {
    getAllUsers,
    createUser
}