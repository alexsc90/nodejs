# Nodejs

In this repo you'll find the project and the exercises done during the course Nodejs by [Platzi](https://platzi.com/clases/backend-js/).

## Table of contents
* [General info](#general-info)
* [Tehcnologies](#technologies)
* [Setup](#setup)
* [Usage](#usage)

## General info
The main goal of the course was to generate an API by using the **HTPP** protcol, so we could enhance the data exchange between server and client. To do so, we have created a simple example of a chat app. The code you'll find here is the result of my practice during the course mentioned above. 

## Technologies
* [Node.js](https://nodejs.org/es/docs/)
* [Express.js](https://expressjs.com/es/4x/api.html/)
* [Mongoose](https://mongoosejs.com/docs/api.html)
* [MongoDB Atlas](https://www.mongodb.com/es/cloud/atlas)
* [Socket.IO](https://socket.io/docs/v4)

## Setup

To install all dependencies make sure you're placed in the root directory before you run the command:

```
npm install
```

## Usage

If you want to see how the app works, you'll need to register into an account in MongoDB Atlas, and set your own environment variables in the *config.js* file:

```
const config = {
    dbUrl: process.env.DB_URL,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files',
}

module.exports = config;
```

For these, I'll recommend you to process them from a *.env* file, and add it to your *.gitignore* file, so you don't reveal your credentials ;).

Once you're logged and have created a cluster in you MongoDB account, you can use your favorite restfulAPI testing tool. In this case I've used [Insomnia](https://support.insomnia.rest/). 

If you're all ready to start trying out the API, DON'T forget to run the command

`node server.js`

to lift the server. 

\***Tip**: If you don't want to have to run this command everytime you want to perform any changes, I'll recommend you to install [nodemon](https://nodemon.io/), so it does it for you. Then, you can run once the command `nodemon server.js` and relax.

Have fun!