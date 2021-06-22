const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true
    })
    .then(() => console.log('[db] Successfully connected'))
    .catch(e => {
        console.error('An error ocurred' , e);
    });
}

module.exports = connect;


