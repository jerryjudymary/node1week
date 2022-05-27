const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb+srv://test:sparta@cluster0.pkemp.mongodb.net/node1week?retryWrites=true&w=majority').catch((err) => {
        console.error(err);
    })
};

const db = mongoose.connection;

const handleConnection = () => {
    console.log('DB연결 정상이요~!');
  };

db.once('open', handleConnection);

module.exports = connect;