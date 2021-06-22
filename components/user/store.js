const Model = require('./model');

function addUser(user) {
    const myUser = new Model(user);
    myUser.save();
}


async function getUsers() {
    const users = await Model.find();
    return users;
}

module.exports = {
    add: addUser,
    list: getUsers,
}