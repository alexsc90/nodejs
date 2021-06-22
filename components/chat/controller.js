const store = require('./store');

function addChat(users) {
    if(!users || !Array.isArray(users)) {
        return Promise.reject('Invalid name');
    }
    const chat = {
        users: users,
    }
        
    return store.add(chat)
}

function getChats(userId) {
    return new Promise((resolve, reject) => {
        resolve(store.list(userId))
    })
}

module.exports = {
    addChat,
    getChats,
}