const dbConnection = require('../db/startup');
const dataUser = require('../db/users/create-user.service');
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
    const userId = req.query.id;
    const userResponse = dataUser.filter( user => user.id === Number(userId));
    res.status(200).send(userResponse[0]);
};

const createUser = async (req, res) => {
    const newDataUsers = [...dataUser, req.boby];
    res.send(newDataUsers);
}; 

const checkIfUserExists = (id) => {
    const user = dataUser.filter(item => item.id === id);
    return !user.length > 0;
}

const updateUser = async (req, res) => {
    const {id, 
            first_name, 
            family_name, 
            email_address, 
            birth_date} = req.body;
    const idUser = checkIfUserExists(id);
    if(isUser) return res.json('user not found.')
    const user = dataUser.reduce((acc, currentUser) => {
        const matchedUser = currentUser.id === id
        if(matchedUser) {
            acc = {...acc,...currentUser}
            return acc;
        }
    }, {});
    const oldUsers = dataUser.filter(item => item.id !== id);
    const newUsers = [...oldUsers, user]
    res.send('newUsers');
};




module.exports = {
    getAllUsers,
    getUserByid,
    createUser,
    updateUser,
    deleteUser
} 